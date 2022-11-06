import { gql } from "@apollo/client";

export const SUBS_REVIEW_LIST = gql `
  subscription getReviewList {
    results: celengin_review(limit: 12, order_by: {rating: desc, created_at: desc_nulls_last}) {
      id
      rating
      comment
      user {
        id
        firstname
        lastname
      }
      created_at
    }
  }
`