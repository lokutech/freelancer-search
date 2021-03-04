interface data {
    status: string
    result: {
      id: number
      owner_id: number
      title: string
      status: string
      sub_status: string
      seo_url: string
      currency: {
        id: number
        code: string
        sign: string
        name: string
        exchange_rate: number
        country: string
        is_external: boolean
        is_escrowcom_supported: boolean
      }
      description: string
      jobs: {
        id: number
        name: string
        category: {
          id: number
          name: string
        }
        seo_url: string
        local: boolean
      }[]
      submitdate: number
      preview_description: string
      deleted: boolean
      nonpublic: boolean
      hidebids: boolean
      type: string
      bidperiod: number
      budget: {
        minimum: number
        maximum: number
      }
      featured: boolean
      urgent: boolean
      assisted: boolean
      active_prepaid_milestone: {}
      bid_stats: {
        bid_count: number
        bid_avg: number
      }
      time_submitted: number
      upgrades: {
        featured: boolean
        sealed: boolean
        nonpublic: boolean
        fulltime: boolean
        urgent: boolean
        qualified: boolean
        NDA: boolean
        assisted: boolean
        active_prepaid_milestone: {}
        ip_contract: boolean
        non_compete: boolean
        project_management: boolean
        pf_only: boolean
        recruiter: boolean
        listed: boolean
      }
      qualifications: never[]
      language: string
      attachments: never[]
      hireme: boolean
      frontend_project_status: string
      nda_signatures: never[]
      location: {
        country: {}
      }
      local: boolean
      negotiated: boolean
      time_free_bids_expire: number
      project_collaborations: never[]
      support_sessions: {
        id: number
        user_id: number
        support_type: string
        source_id: number
        create_time: number
        agent_session: {
          id: number
          support_type: string
          support_agent: {
            id: number
            user_id: number
          }
          support_session_id: number
          create_time: number
          resolved_time: number
          resolved_reason: string
          is_latest: boolean
        }
      }[]
      pool_ids: string[]
      enterprise_ids: never[]
      is_escrow_project: boolean
      is_seller_kyc_required: boolean
      is_buyer_kyc_required: boolean
      project_reject_reason: {}
      owner: {
        id: number
        username: string
        closed: boolean
        avatar: string
        reputation: {
          entire_history: {
            overall: number
            on_budget: number
            on_time: number
            positive: number
            category_ratings: {
              quality: number
              communication: number
              expertise: number
              professionalism: number
              hire_again: number
            }
            all: number
            reviews: number
            incomplete_reviews: number
            complete: number
            incomplete: number
            completion_rate: number
          }
          last3months: {
            overall: number
            on_budget: number
            on_time: number
            positive: number
            category_ratings: {
              quality: number
              communication: number
              expertise: number
              professionalism: number
              hire_again: number
            }
            all: number
            reviews: number
            incomplete_reviews: number
            complete: number
            incomplete: number
            completion_rate: number
          }
          last12months: {
            overall: number
            on_budget: number
            on_time: number
            positive: number
            category_ratings: {
              quality: number
              communication: number
              expertise: number
              professionalism: number
              hire_again: number
            }
            all: number
            reviews: number
            incomplete_reviews: number
            complete: number
            incomplete: number
            completion_rate: number
          }
          user_id: number
          role: string
          earnings_score: number
          job_history: {
            count_other: number
            job_counts: never[]
          }
        }
        jobs: never[]
        profile_description: string
        hourly_rate: number
        registration_date: number
        limited_account: boolean
        display_name: string
        tagline: string
        location: {
          country: {
            name: string
            flag_url: string
            code: string
            highres_flag_url: string
            flag_url_cdn: string
            highres_flag_url_cdn: string
          }
          city: string
          latitude: number
          longitude: number
          vicinity: string
          administrative_area: string
        }
        avatar_large: string
        role: string
        chosen_role: string
        employer_reputation: {
          entire_history: {
            overall: number
            positive: number
            category_ratings: {
              clarity_spec: number
              communication: number
              payment_prom: number
              professionalism: number
              work_for_again: number
            }
            all: number
            reviews: number
            complete: number
            incomplete: number
            completion_rate: number
          }
          last3months: {
            overall: number
            positive: number
            category_ratings: {
              clarity_spec: number
              communication: number
              payment_prom: number
              professionalism: number
              work_for_again: number
            }
            all: number
            reviews: number
            complete: number
            incomplete: number
            completion_rate: number
          }
          last12months: {
            overall: number
            positive: number
            category_ratings: {
              clarity_spec: number
              communication: number
              payment_prom: number
              professionalism: number
              work_for_again: number
            }
            all: number
            reviews: number
            complete: number
            incomplete: number
            completion_rate: number
          }
          user_id: number
          role: string
          earnings_score: number
          job_history: {
            count_other: number
            job_counts: {
              count: number
              job: {
                id: number
                name: string
                category: {
                  id: number
                  name: string
                }
                local: boolean
              }
            }[]
          }
          project_stats: {
            open: number
            work_in_progress: number
            complete: number
            pending: number
            draft: number
          }
        }
        status: {
          payment_verified: boolean
          email_verified: boolean
          deposit_made: boolean
          profile_complete: boolean
          phone_verified: boolean
          identity_verified: boolean
          facebook_connected: boolean
          freelancer_verified_user: boolean
          linkedin_connected: boolean
        }
        avatar_cdn: string
        avatar_large_cdn: string
        primary_currency: {
          id: number
          code: string
          sign: string
          name: string
          exchange_rate: number
          country: string
        }
        membership_package: {
          id: number
          name: string
        }
        qualifications: never[]
        primary_language: string
        cover_image: {
          current_image: {
            url: string
            description: string
            width: number
            height: number
            context: {
              id: number
              type: string
            }
          }
        }
        portfolio_count: number
        preferred_freelancer: boolean
        public_name: string
        company: string
        recommendations: number
        pool_ids: never[]
        enterprise_ids: never[]
        escrowcom_interaction_required: boolean
        timezone: {
          id: number
          country: string
          timezone: string
          offset: number
        }
        responsiveness: number
        oauth_password_credentials_allowed: boolean
        registration_completed: boolean
        is_profile_visible: boolean
      }
      selected_bids: never[]
    }
    request_id: string
  }
  