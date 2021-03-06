import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Job.css'
import Job from './Job'

function Jobs({setResults}:{setResults: React.Dispatch<React.SetStateAction<number>>}) {
  const [purgedProjects, setPurgedProjects] = useState<Purged[]>([])
  // const skills = 'react'

  useEffect(() => {
    async function fetchData() {
      const url = 'https://www.freelancer.com/api/projects/0.1/projects/active?limit=100&query=react&jobs[]=759&jobs[]=1623&job_details&user_details&user_employer_reputation_extra&user_country_details&full_description&compact'
      let { data } = await axios.get<any>(url)
      let {projects,users,}: { projects: Project[]; users: Users } = await data.result

      let arr: Purged[] = []
      
      projects.map((a) => {
        if (users[a.owner_id]['location']['country']['code'] !== 'in'){
        arr = [
          ...arr,
          {
            id: a.id,
            owner_id: a.owner_id,
            submitdate: a.submitdate,
            title: a.title,
            url: a.seo_url,
            description: a.description,
            status: a.status,
            bidCount: a.bid_stats.bid_count,
            currency: a.currency.sign,
            budget: { minimum: a.budget.minimum, maximum: a.budget.maximum },
            jobs: a.jobs.map((a) => a.name),
            userInfo: {
              id: a.owner_id,
              display_name: users[a.owner_id]['display_name'],
              country: {
                name: users[a.owner_id]['location']['country']['name'],
                code: users[a.owner_id]['location']['country']['code'],
                flag:
                  users[a.owner_id]['location']['country'][
                    'highres_flag_url_cdn'
                  ],
              },
              reputation:
                users[a.owner_id]['employer_reputation']['entire_history'][
                  'overall'
                ],
              reviews:
                users[a.owner_id]['employer_reputation']['entire_history'][
                  'reviews'
                ],
            },
          },
        ]
      }
      })
      setPurgedProjects(arr)
      setResults(arr.length)
    }
    fetchData()
  }, [])

  return (
    <>
      {purgedProjects.map((project) => (
        <Job
          key={project.id}
          url={project.url}
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
  seo_url: string
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
  url: string
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
