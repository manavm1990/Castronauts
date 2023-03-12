export default {
  Query: {
    tracks(_, __, { dataSources }) {
      return dataSources.trackAPI.indexTracks();
    },
    track(_, { id }, { dataSources }) {
      return dataSources.trackAPI.showTrack(id);
    },
  },
  Track: {
    // The resolver for the author field on the Track type (parent is the track)
    author({ authorId }, _, { dataSources }) {
      return dataSources.trackAPI.showAuthor(authorId);
    },
  },
};
