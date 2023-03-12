import { gql } from "graphql-tag";

const typeDefs = gql`
  type Query {
    tracks: [Track!]!
    track(id: ID!): Track
  }

  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }

  # Convention: name the mutation response type after the mutation name with "Response" appended
  type IncrementTrackViewsResponse {
    "Akin to an HTTP status code, GraphQL gives you the option to use your own codes."
    code: Int!
    success: Boolean!

    "A message to pass along to the frontend, such as a success or error message."
    message: String!

    "The track that the number of views was incremented for"
    track: Track
  }

  "A track is a group of modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    "The track's illustration url"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    modulesCount: Int
    "Supports MD too! This is the track's complete description"
    description: String
    numberOfViews: Int
    modules: [Module!]!
  }

  "A module is a single unit of teaching. Multiple modules compose a track"
  type Module {
    id: ID!
    title: String!
    "The module's length in minutes"
    length: Int
  }

  type Author {
    id: ID!
    "Author's First and Last Name"
    name: String!
    "Author's profile picture url"
    photo: String
  }
`;

export default typeDefs;
