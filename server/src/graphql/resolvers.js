export default {
  Query: {
    tracks(_, __, { dataSources }) {
      return dataSources.trackAPI.indexTracks();
    },
    track(_, { id }, { dataSources }) {
      return dataSources.trackAPI.showTrack(id);
    },
  },

  // The resolver for the Track type's modules field
  // Keeping it separated means it only gets called when the modules field is requested
  // (parent is the track) - RESOLVER ⛓️
  Track: {
    // The resolver for the author field on the Track type (parent is the track)
    author({ authorId }, _, { dataSources }) {
      return dataSources.trackAPI.showAuthor(authorId);
    },
  },
};
