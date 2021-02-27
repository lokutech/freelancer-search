import React, { useEffect, useState } from 'react'
import './Job.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import { faHourglassHalf as Hourglass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { formatDistanceToNow } from 'date-fns'

function Job(e) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('')
  const [bid, setBid] = useState(0)
  const [currency, setCurrency] = useState('')
  const [budget, setBudget] = useState({})
  const [jobs, setJobs] = useState([])
  const [rating, setRating] = useState(0)
  const [country, setCountry] = useState('')
  const [reviewCount, setReviewCount] = useState(null)
  const [submitDate, setSubmitDate] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const url =
    'https://www.freelancer.com/api/projects/0.1/projects/'+e.jobId+'?full_description&job_details&upgrade_details&attachment_details&file_details&qualification_details&selected_bids&hireme_details&user_details&invited_freelancer_details&recommended_freelancer_details&hourly_details&support_session_details&location_details&nda_signature_details&project_collaboration_details&proximity_details&review_availability_details&corporate_users&marketing_mobile_number&sanction_details&limited_account&user_avatar&user_country_details&user_profile_description&user_display_info&user_jobs&user_balance_details&user_qualification_details&user_membership_details&user_financial_details&user_location_details&user_portfolio_details&user_preferred_details&user_status&user_reputation&user_employer_reputation&user_reputation_extra&user_employer_reputation_extra&user_cover_image&user_past_cover_images&user_recommendations&user_responsiveness&corporate_users&marketing_mobile_number&sanction_details&limited_account&compact'

      let { data } = await axios.get(url)

      console.log(data.result.title)
      setSubmitDate(data.result.submitdate * 1000)
      setTitle(data.result.title)
      setDescription(data.result.description)
      setStatus(data.result.frontend_project_status)
      setBid(data.result.bid_stats.bid_count)
      setCurrency(data.result.currency)
      setBudget(data.result.budget)
      setJobs(data.result.jobs)
      setRating(data.result.owner.employer_reputation.entire_history.overall)
      setCountry(data.result.owner.location.country)
      setReviewCount(data.result.owner.employer_reputation.entire_history.all)
    } fetchData()
  }, [e])

  return (
    <div className="job__container">
      <div className="job__jobType">
        <p>
          <FontAwesomeIcon icon={faDesktop} />
        </p>
      </div>
      <div className="job__main">
        <h2 className="job__title">{title}</h2>
        <p className="job__summary">{description}</p>
        <div className="job__infoExtras">
          <div className="job__infoExtras__left">
            <span className="job__icon">
              <FontAwesomeIcon icon={Hourglass} />
            </span>
            <span className="job__status"> {status}</span>
            <span className="job__time">
              {formatDistanceToNow(new Date(submitDate))} ago —{' '}
            </span>
            <span className="job__time">{bid} bids</span>
          </div>
          <div className="job__infoExtras__right">
            <span className="job__icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span className="job__rating">{rating.toFixed(1)}</span>
            <span className="job__stars">{'⭐️'.repeat(rating)} </span>
            <span className="job__reviews">({reviewCount} reviews)</span>
          </div>
        </div>
        <div className="job__tags">
          <span className="job__icon">
            <FontAwesomeIcon icon={faTag} />{' '}
          </span>
          <p className="job__tags__tags">
            {' '}
            {jobs.map((j, i) => (i ? ', ' : '') + j.name)}
          </p>
        </div>
      </div>
      <div className="job__side">
        <h1>
          {currency.sign}
          {budget.minimum} - {currency.sign}
          {budget.maximum}
        </h1>
        <p>{currency.code}</p>
        <img
          src={`https://www.f-cdn.com/assets/main/en/assets/flags/${country.code}.svg`}
          alt="us"
          title={country.name}
        />
      </div>
    </div>
  )
}

export default Job
