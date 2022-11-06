import { gql } from "@apollo/client";

/**
 * @request variables = {user_id, rating, comment, update_columns:[rating, comment]}
 */

export const ADD_REVIEW = gql`
  mutation addReview($user_id: uuid!, $rating: Int!, $comment: String, $update_columns: [celengin_review_update_column!] = [rating, comment]) {
    results: insert_celengin_review(objects: {user_id: $user_id, rating: $rating, comment: $comment}, on_conflict: {constraint: review_user_id_key, update_columns: $update_columns}) {
      returning {
        id
        user {
          id
          firstname
          lastname
        }
        rating
        comment
        created_at
      }
    }
  }
`