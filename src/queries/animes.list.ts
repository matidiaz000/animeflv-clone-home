import { gql } from '@apollo/client';

export const GET_ANIME_LIST = gql`
  query ($sort: [MediaSort], $page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        hasNextPage
        currentPage
        lastPage
        perPage
        total
      }
      media (sort: $sort, format_in: [OVA, TV, MOVIE], isAdult: false) {
        id
        coverImage {
          medium
          large
          color
        }
        title {
          userPreferred
          english
          native
          romaji
        }
        episodes
        format
        duration
        status
      }
    }
  }
`;