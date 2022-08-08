import { gql } from "@apollo/client";

const GET_ANIME_2022 = gql`
  {
    searchWorks(
      seasons: ["2022-spring", "2022-summer", "2022-autumn", "2022-winter"]
      orderBy: { field: WATCHERS_COUNT, direction: DESC }
    ) {
      edges {
        node {
          annictId
          id
          title
          titleEn
          episodesCount
          seasonYear
          seasonName
          media
          satisfactionRate
          image {
            id
            copyright
            recommendedImageUrl
            facebookOgImageUrl
            twitterAvatarUrl
            twitterBiggerAvatarUrl
            twitterMiniAvatarUrl
            twitterNormalAvatarUrl
          }
        }
      }
    }
  }
`;

const GET_ANIME_2021 = gql`
  {
    searchWorks(
      seasons: ["2021-spring", "2021-summer", "2021-autumn", "2021-winter"]

      orderBy: { field: WATCHERS_COUNT, direction: DESC }
    ) {
      edges {
        node {
          annictId
          id
          title
          titleEn
          episodesCount
          seasonYear
          media
          satisfactionRate
          image {
            id
            recommendedImageUrl
          }
        }
      }
    }
  }
`;

const GET_ANIME_2020 = gql`
  {
    searchWorks(
      seasons: ["2020-spring", "2020-summer", "2020-autumn", "2020-winter"]

      orderBy: { field: WATCHERS_COUNT, direction: DESC }
    ) {
      edges {
        node {
          annictId
          id
          title
          titleEn
          episodesCount
          seasonYear
          media
          satisfactionRate
          image {
            id
            recommendedImageUrl
          }
        }
      }
    }
  }
`;

const GET_ANIME_2019 = gql`
  {
    searchWorks(
      seasons: ["2019-spring", "2019-summer", "2019-autumn", "2019-winter"]

      orderBy: { field: WATCHERS_COUNT, direction: DESC }
    ) {
      edges {
        node {
          annictId
          id
          title
          titleEn
          episodesCount
          seasonYear
          media
          satisfactionRate
          image {
            id
            recommendedImageUrl
          }
        }
      }
    }
  }
`;

const GET_ANIME_2018 = gql`
  {
    searchWorks(
      seasons: ["2018-spring", "2018-summer", "2018-autumn", "2018-winter"]

      orderBy: { field: WATCHERS_COUNT, direction: DESC }
    ) {
      edges {
        node {
          annictId
          id
          title
          titleEn
          episodesCount
          seasonYear
          media
          satisfactionRate
          image {
            id
            recommendedImageUrl
          }
        }
      }
    }
  }
`;
const GET_ANIME_2017 = gql`
  {
    searchWorks(
      seasons: ["2017-spring", "2017-summer", "2017-autumn", "2017-winter"]

      orderBy: { field: WATCHERS_COUNT, direction: DESC }
    ) {
      edges {
        node {
          annictId
          id
          title
          titleEn
          episodesCount
          seasonYear
          media
          satisfactionRate
          image {
            id
            recommendedImageUrl
          }
        }
      }
    }
  }
`;

const GET_ANIME_2016 = gql`
  {
    searchWorks(
      seasons: ["2016-spring", "2016-summer", "2016-autumn", "2016-winter"]

      orderBy: { field: WATCHERS_COUNT, direction: DESC }
    ) {
      edges {
        node {
          annictId
          id
          title
          titleEn
          episodesCount
          seasonYear
          media
          satisfactionRate
          image {
            id
            recommendedImageUrl
          }
        }
      }
    }
  }
`;

export {
  GET_ANIME_2022,
  GET_ANIME_2021,
  GET_ANIME_2020,
  GET_ANIME_2019,
  GET_ANIME_2018,
  GET_ANIME_2017,
  GET_ANIME_2016,
};
