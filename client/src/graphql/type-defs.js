import { gql } from "@apollo/client";

export const TRACKS = gql`
  query ReadTracks {
    tracks {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`;
