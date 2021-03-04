import React, { useEffect, useState } from 'react'
import './Job.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import { faHourglassHalf as Hourglass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import { formatDistanceToNow } from 'date-fns'

function Job({ displayName, submitDate, title, description, status, bidCount, currency, budget, jobs, rating, reviewCount, country }: Job) {

  return (
    <div>
    <div className="job__container">
      <div className="job__jobType">
        <p>
          <FontAwesomeIcon icon={faDesktop} />
        </p>
      </div>
      <div className="job__main">
        <h2 className="job__title">{title}</h2>
        <p className="job__summary">{description}</p>
      </div>
      <div className="job__side">
        <h1>
          {currency}
          {budget?.minimum} - {currency}
          {budget?.maximum}
        </h1>
        {/* <p>{currency}</p> */}
        <div className="img__div">
          <img
            // src={`https://www.f-cdn.com/assets/main/en/assets/flags/${country?.code}.svg`}
            src={`${country?.flag}`}
            alt="us"
            title={country?.name}
          />
        </div>
      </div>
    </div>

    <div className="job__bottom">
      <div className="job__infoExtras">
        <div className="job__infoExtras__left">
          <span className="job__icon">
            <FontAwesomeIcon icon={Hourglass} />
          </span>
          <span className="job__status"> {status}</span>
          <span className="job__time">
            {formatDistanceToNow(new Date(submitDate as number))} ago —{' '}
          </span>
          <span className="job__time">{bidCount} bids</span>
        </div>
        <div className="job__infoExtras__right">
          <span className="job__icon">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <span className="job__rating">{rating!.toFixed(1)}</span>
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
          {jobs?.map((j, i) => (i ? ', ' : '') + j)}
        </p>
      </div>
    </div>
  </div>
  )
}

export default Job

interface Job {
  displayName: string
  submitDate: number
  title: string
  description: string
  status: string
  bidCount: number
  currency: string
  budget: {minimum: number, maximum: number}
  jobs: string[]
  rating: number
  reviewCount: number
  country: {
    name: string
    code: string
    flag: string
  }
}
