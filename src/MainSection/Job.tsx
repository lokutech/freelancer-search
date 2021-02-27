import React, { useEffect, useState } from 'react'
import './Job.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import { faHourglassHalf as Hourglass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { formatDistanceToNow } from 'date-fns'

function Job({jobId}: jobId) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('')
  const [bid, setBid] = useState(0)
  const [currency, setCurrency] = useState<Icurrency>()
  const [budget, setBudget] = useState<Ibudget>()
  const [jobs, setJobs] = useState<Ijobs>()
  const [rating, setRating] = useState(0)
  const [country, setCountry] = useState<Icountry>()
  const [reviewCount, setReviewCount] = useState<number>()
  const [submitDate, setSubmitDate] = useState<number | null>(null)

  useEffect(() => {
    async function fetchData() {
      const url =
    'https://www.freelancer.com/api/projects/0.1/projects/'+jobId+'?full_description&job_details&upgrade_details&attachment_details&file_details&qualification_details&selected_bids&hireme_details&user_details&invited_freelancer_details&recommended_freelancer_details&hourly_details&support_session_details&location_details&nda_signature_details&project_collaboration_details&proximity_details&review_availability_details&corporate_users&marketing_mobile_number&sanction_details&limited_account&user_avatar&user_country_details&user_profile_description&user_display_info&user_jobs&user_balance_details&user_qualification_details&user_membership_details&user_financial_details&user_location_details&user_portfolio_details&user_preferred_details&user_status&user_reputation&user_employer_reputation&user_reputation_extra&user_employer_reputation_extra&user_cover_image&user_past_cover_images&user_recommendations&user_responsiveness&corporate_users&marketing_mobile_number&sanction_details&limited_account&compact'
    
      let { data }: data  = await axios.get(url)
      
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
  }, [jobId])

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
              {formatDistanceToNow(new Date(submitDate as number))} ago —{' '}
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
            {jobs?.map((j, i) => (i ? ', ' : '') + j.name)}
          </p>
        </div>
      </div>
      <div className="job__side">
        <h1>
          {currency?.sign}
          {budget?.minimum} - {currency?.sign}
          {budget?.maximum}
        </h1>
        <p>{currency?.code}</p>
        <img
          src={`https://www.f-cdn.com/assets/main/en/assets/flags/${country?.code}.svg`}
          alt="us"
          title={country?.name}
        />
      </div>
    </div>
  )
}

export default Job


interface jobId {
  jobId: number
}

type Ijobs = data['data']['result']['jobs']
type Icurrency = data['data']['result']['currency']
type Ibudget = data['data']['result']['budget']
type Icountry = data['data']['result']['owner']['location']['country']

interface data {
  data: {
    status: string;
    result: {
        id: number;
        owner_id: number;
        title: string;
        status: string;
        sub_status: string;
        seo_url: string;
        currency: {
            id: number;
            code: string;
            sign: string;
            name: string;
            exchange_rate: number;
            country: string;
            is_external: boolean;
            is_escrowcom_supported: boolean;
        };
        description: string;
        jobs: {
            id: number;
            name: string;
            category: {
                id: number;
                name: string;
            };
            seo_url: string;
            local: boolean;
        }[];
        submitdate: number;
        preview_description: string;
        deleted: boolean;
        nonpublic: boolean;
        hidebids: boolean;
        type: string;
        bidperiod: number;
        budget: {
            minimum: number;
            maximum: number;
        };
        featured: boolean;
        urgent: boolean;
        assisted: boolean;
        active_prepaid_milestone: {};
        bid_stats: {
            bid_count: number;
            bid_avg: number;
        };
        time_submitted: number;
        upgrades: {
            featured: boolean;
            sealed: boolean;
            nonpublic: boolean;
            fulltime: boolean;
            urgent: boolean;
            qualified: boolean;
            NDA: boolean;
            assisted: boolean;
            active_prepaid_milestone: {};
            ip_contract: boolean;
            non_compete: boolean;
            project_management: boolean;
            pf_only: boolean;
            recruiter: boolean;
            listed: boolean;
        };
        qualifications: never[];
        language: string;
        attachments: never[];
        hireme: boolean;
        frontend_project_status: string;
        nda_signatures: never[];
        location: {
            country: {};
        };
        local: boolean;
        negotiated: boolean;
        time_free_bids_expire: number;
        project_collaborations: never[];
        support_sessions: {
            id: number;
            user_id: number;
            support_type: string;
            source_id: number;
            create_time: number;
            agent_session: {
                id: number;
                support_type: string;
                support_agent: {
                    id: number;
                    user_id: number;
                };
                support_session_id: number;
                create_time: number;
                resolved_time: number;
                resolved_reason: string;
                is_latest: boolean;
            };
        }[];
        pool_ids: string[];
        enterprise_ids: never[];
        is_escrow_project: boolean;
        is_seller_kyc_required: boolean;
        is_buyer_kyc_required: boolean;
        project_reject_reason: {};
        owner: {
            id: number;
            username: string;
            closed: boolean;
            avatar: string;
            reputation: {
                entire_history: {
                    overall: number;
                    on_budget: number;
                    on_time: number;
                    positive: number;
                    category_ratings: {
                        quality: number;
                        communication: number;
                        expertise: number;
                        professionalism: number;
                        hire_again: number;
                    };
                    all: number;
                    reviews: number;
                    incomplete_reviews: number;
                    complete: number;
                    incomplete: number;
                    completion_rate: number;
                };
                last3months: {
                    overall: number;
                    on_budget: number;
                    on_time: number;
                    positive: number;
                    category_ratings: {
                        quality: number;
                        communication: number;
                        expertise: number;
                        professionalism: number;
                        hire_again: number;
                    };
                    all: number;
                    reviews: number;
                    incomplete_reviews: number;
                    complete: number;
                    incomplete: number;
                    completion_rate: number;
                };
                last12months: {
                    overall: number;
                    on_budget: number;
                    on_time: number;
                    positive: number;
                    category_ratings: {
                        quality: number;
                        communication: number;
                        expertise: number;
                        professionalism: number;
                        hire_again: number;
                    };
                    all: number;
                    reviews: number;
                    incomplete_reviews: number;
                    complete: number;
                    incomplete: number;
                    completion_rate: number;
                };
                user_id: number;
                role: string;
                earnings_score: number;
                job_history: {
                    count_other: number;
                    job_counts: never[];
                };
            };
            jobs: never[];
            profile_description: string;
            hourly_rate: number;
            registration_date: number;
            limited_account: boolean;
            display_name: string;
            tagline: string;
            location: {
                country: {
                    name: string;
                    flag_url: string;
                    code: string;
                    highres_flag_url: string;
                    flag_url_cdn: string;
                    highres_flag_url_cdn: string;
                };
                city: string;
                latitude: number;
                longitude: number;
                vicinity: string;
                administrative_area: string;
            };
            avatar_large: string;
            role: string;
            chosen_role: string;
            employer_reputation: {
                entire_history: {
                    overall: number;
                    positive: number;
                    category_ratings: {
                        clarity_spec: number;
                        communication: number;
                        payment_prom: number;
                        professionalism: number;
                        work_for_again: number;
                    };
                    all: number;
                    reviews: number;
                    complete: number;
                    incomplete: number;
                    completion_rate: number;
                };
                last3months: {
                    overall: number;
                    positive: number;
                    category_ratings: {
                        clarity_spec: number;
                        communication: number;
                        payment_prom: number;
                        professionalism: number;
                        work_for_again: number;
                    };
                    all: number;
                    reviews: number;
                    complete: number;
                    incomplete: number;
                    completion_rate: number;
                };
                last12months: {
                    overall: number;
                    positive: number;
                    category_ratings: {
                        clarity_spec: number;
                        communication: number;
                        payment_prom: number;
                        professionalism: number;
                        work_for_again: number;
                    };
                    all: number;
                    reviews: number;
                    complete: number;
                    incomplete: number;
                    completion_rate: number;
                };
                user_id: number;
                role: string;
                earnings_score: number;
                job_history: {
                    count_other: number;
                    job_counts: {
                        count: number;
                        job: {
                            id: number;
                            name: string;
                            category: {
                                id: number;
                                name: string;
                            };
                            local: boolean;
                        };
                    }[];
                };
                project_stats: {
                    open: number;
                    work_in_progress: number;
                    complete: number;
                    pending: number;
                    draft: number;
                };
            };
            status: {
                payment_verified: boolean;
                email_verified: boolean;
                deposit_made: boolean;
                profile_complete: boolean;
                phone_verified: boolean;
                identity_verified: boolean;
                facebook_connected: boolean;
                freelancer_verified_user: boolean;
                linkedin_connected: boolean;
            };
            avatar_cdn: string;
            avatar_large_cdn: string;
            primary_currency: {
                id: number;
                code: string;
                sign: string;
                name: string;
                exchange_rate: number;
                country: string;
            };
            membership_package: {
                id: number;
                name: string;
            };
            qualifications: never[];
            primary_language: string;
            cover_image: {
                current_image: {
                    url: string;
                    description: string;
                    width: number;
                    height: number;
                    context: {
                        id: number;
                        type: string;
                    };
                };
            };
            portfolio_count: number;
            preferred_freelancer: boolean;
            public_name: string;
            company: string;
            recommendations: number;
            pool_ids: never[];
            enterprise_ids: never[];
            escrowcom_interaction_required: boolean;
            timezone: {
                id: number;
                country: string;
                timezone: string;
                offset: number;
            };
            responsiveness: number;
            oauth_password_credentials_allowed: boolean;
            registration_completed: boolean;
            is_profile_visible: boolean;
        };
        selected_bids: never[];
    };
    request_id: string;
};
}