import { gql } from "graphql-tag";

const typeDefs = gql`
  type Query {
    tracks: [Track!]!
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
