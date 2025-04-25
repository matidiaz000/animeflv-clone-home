import { gql } from '@apollo/client';

export const GET_LOCATIONS = gql`
  query  {
    Media (id: 16498) {
      id
      coverImage {
        extraLarge
        color
      }
      description
      tags {
        name
      }
      title {
        userPreferred
        english
        native
        romaji
      }
      format
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