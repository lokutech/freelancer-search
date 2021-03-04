import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Job.css'
import Job from './Job'
import { useScrollTrigger } from '@material-ui/core'

function Jobs() {
  const [projects, setProjects] = useState([])
  const [purgedProjects, setPurgedProjects] = useState<Purged[]>([])
  const [users, setUsers] = useState([])
  const [id, setId] = useState<number>()
  const [ownerId, setOwnerId] = useState<number>()
  const [displayName, setDislayName] = useState<string>('')
  const [submitDate, setSubmitDate] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [status, setStatus] = useState<string>('')
  const [bidCount, setBidCount] = useState(0)
  const [currency, setCurrency] = useState<string>('')
  const [budget, setBudget] = useState<{ minimum: number; maximum: number }>({
    minimum: 0,
    maximum: 0,
  })
  const [jobs, setJobs] = useState<string[]>([])
  const [rating, setRating] = useState<number>(0)
  const [reviewCount, setReviewCount] = useState(0)
  const [country, setCountry] = useState<{
    name: string
    code: string
    flag: string
  }>({ name: '', code: '', flag: '' })

  useEffect(() => {
    async function fetchData() {
      const url = 'https://www.freelancer.com/api/projects/0.1/projects/active?limit=2&job_details&user_details&user_employer_reputation_extra&user_country_details&full_description&compact'
      let { data } = await axios.get<any>(url)
      let { projects, users,}: { projects: Project[]; users: Users } = data.result

      // @ts-ignore
      setProjects(projects)
      console.log(projects)
      // @ts-ignore
      setUsers(users)
      console.log(users)

      projects.map((a) => {
        setPurgedProjects(
          [...purgedProjects,
            {id: a.id,
             owner_id: a.owner_id,
             submitdate: a.submitdate,
             title: a.title,
             description: a.description,
             status: a.status,
             bidCount: a.bid_stats.bid_count,
             currency: a.currency.sign,
             budget: { minimum: a.budget.minimum, maximum: a.budget.maximum },
             jobs: a.jobs.map((a) => a.name),
             userInfo : {
               id: a.owner_id,
               display_name: users[a.owner_id]['display_name'],
               country: {  
                 name: users[a.owner_id]['location']['country']['name'],
                 code: users[a.owner_id]['location']['country']['code'],
                 flag: users[a.owner_id]['location']['country']['highres_flag_url_cdn'],
               },
               reputation: users[a.owner_id]['employer_reputation']['entire_history']['overall'],
               reviews: users[a.owner_id]['employer_reputation']['entire_history']['reviews']

             }
            }
          ]
        )
        let id = a.id
        setId(a.id)
        let owner_id = a.owner_id
        setOwnerId(a.owner_id)
        let display_name = users[a.owner_id]['display_name']
        setDislayName(users[a.owner_id]['display_name'])
        let submitDate = a.submitdate
        setSubmitDate(a.submitdate)
        let title = a.title
        setTitle(a.title)
        let description = a.description
        setDescription(a.description)
        let status = a.status
        setStatus(a.status)
        let bidCount = a.bid_stats.bid_count
        setBidCount(a.bid_stats.bid_count)
        let currency = a.currency.sign
        setCurrency(a.currency.sign)
        let budget = { minimun: a.budget.minimum, maximum: a.budget.maximum }
        setBudget({ minimum: a.budget.minimum, maximum: a.budget.maximum })
        let jobs = a.jobs.map((a) => a.name)
        setJobs(a.jobs.map((a) => a.name))
        let rating =
          users[a.owner_id]['employer_reputation']['entire_history']['overall']
        setRating(
          users[a.owner_id]['employer_reputation']['entire_history']['overall'],
        )
        let reviewCount =
          users[a.owner_id]['employer_reputation']['entire_history']['reviews']
        setReviewCount(
          users[a.owner_id]['employer_reputation']['entire_history']['reviews'],
        )
        let country = {
          name: users[a.owner_id]['location']['country']['name'],
          code: users[a.owner_id]['location']['country']['code'],
          flag:
            users[a.owner_id]['location']['country']['highres_flag_url_cdn'],
        }
        setCountry({
          name: users[a.owner_id]['location']['country']['name'],
          code: users[a.owner_id]['location']['country']['code'],
          flag:
            users[a.owner_id]['location']['country']['highres_flag_url_cdn'],
        })

        console.log(
          ' id: ' + id + '\n',
          'owner_id: ' + owner_id + '\n',
          'display_name: ' + display_name + '\n',
          'submitDate: ' + submitDate + '\n',
          'title: ' + title + '\n',
          'description: ' + description + '\n',
          'status: ' + status + '\n',
          'bidCount: ' + bidCount + '\n',
          'currency: ' + currency + '\n',
          'budget min: ' + budget.minimun + '\n',
          'budget max: ' + budget.maximum + '\n',
          'jobs: ' + jobs + '\n',
          'rating: ' + rating + '\n',
          'reviewCount: ' + reviewCount + '\n',
          'country name: ' + country.name + '\n',
          'country code: ' + country.code + '\n',
          'country flag: ' + country.flag + '\n',
        )
      })
    }
    fetchData()
  }, [])

  return (
    <>
      {purgedProjects.map((project) => (
        <Job
          displayName={project.userInfo.display_name}
          submitDate={project.submitdate}
          title={project.title}
          description={project.description}
          status={project.status}
          bidCount={project.bidCount}
          currency={project.currency}
          budget={project.budget}
          jobs={project.jobs}
          rating={project.userInfo.reputation}
          reviewCount={project.userInfo.reviews}
          country={project.userInfo.country}
        />
      ))}
    </>
  )
}

export default Jobs

interface Project {
  id: number
  owner_id: number
  submitdate: number
  title: string
  description: string
  status: string
  bid_stats: {
    bid_count: number
  }
  currency: {
    sign: string
  }
  budget: {
    minimum: number // budget.minimum
    maximum: number // budget.maximum
  }
  jobs: {
    name: string
  }[]
}

interface Users {
  [key: string]: {
    id: number
    display_name: string
    closed: boolean
    hourly_rate: number
    location: {
      country: {
        name: string
        code: string
        highres_flag_url_cdn: string
      }
    }
    employer_reputation: {
      entire_history: {
        overall: number //rating
        reviews: number // review count
      }
    }
  }
}

interface Purged {
  id: number
  owner_id: number
  submitdate: number
  title: string
  description: string
  status: string
  bidCount: number
  currency: string
  budget: {
    minimum: number // budget.minimum
    maximum: number // budget.maximum
  }
  jobs: string[]
  userInfo: {
      id: number
      display_name: string
      country: {
          name: string
          code: string
          flag: string
        }
      reputation: number
      reviews: number
  }
}