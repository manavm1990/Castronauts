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

export const GET_TRACK = gql`
  query GetTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      thumbnail
      length
      modulesCount
      description
      numberOfViews
      author {
        id
        name
        photo
      }
      modules {
        id
        title
        length
      }
    }
  }
`;

export const INCREMENT_TRACK_VIEWS = gql`
  mutation IncrementTrackViews($incrementTrackViewsId: ID!) {
    incrementTrackViews(id: $incrementTrackViewsId) {
      code
      message
      success
      track {
        id
        numberOfViews
      }
    }
  }
`;
