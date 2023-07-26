import { gql } from '@apollo/client';
import { REPO_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  query Query($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String){
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
      edges {
        node {
          ...RepoDetails
        }
      }
    }
  }
  ${REPO_DETAILS}
`

export const ME = gql`
  query getCurrentUser($includeReviews: Boolean = false){
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            createdAt
            rating
            repository {
              fullName
            }
            text
            repositoryId
          }
        }
      }
    }
  }
`

export const SINGLE_REPOSITORY = gql`
  query Repository($id: ID!){
    repository(id: $id) {
      ...RepoDetails
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
  ${REPO_DETAILS}
`
