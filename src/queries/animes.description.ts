import { gql } from '@apollo/client';

export const GET_LOCATIONS = gql`
  query  {
    Media (id: 16498) {
      id
      title {
        userPreferred
        english
        native
        romaji
      }
      duration
      status
      streamingEpisodes {
        title
        site
        thumbnail
        url
      }
    }
  }
`;