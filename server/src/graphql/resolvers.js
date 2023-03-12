/**
  * A resolver function populates the data for a field in your schema.
  *  The function has four parameters. 
  * The first, parent, contains the returned data of the previous function in the 
resolver chain.
  * The second, args, is an object that contains all the arguments provided to the field. 
  * We use the third parameter, context, to access data sources such as a database or REST API. 
  * Finally, the fourth parameter, info, contains informational properties about the operation state.
*/

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
    // The resolver for the modules field on the Track type (parent is the track)
    modules({ id }, _, { dataSources }) {
      return dataSources.trackAPI.getTrackModules(id);
    },
  },
};
