const { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    # This is the mutation name that we defined in the typeDefs.js file
    
  }