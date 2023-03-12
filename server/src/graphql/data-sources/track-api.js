// KeyValueCache is the type of Apollo server's default cache
import { RESTDataSource } from "@apollo/datasource-rest";

const BASE_URL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

class TrackAPI extends RESTDataSource {
  // ⚠️ Must be called 'baseURL' to work with Apollo Server
  baseURL = BASE_URL;

  indexTracks() {
    return this.get("tracks");
  }

  showAuthor(authorId) {
    return this.get(`author/${encodeURIComponent(authorId)}`);
  }

  showTrack(trackId) {
    return this.get(`track/${encodeURIComponent(trackId)}`);
  }

  getTrackModules(trackId) {
    return this.get(`track/${encodeURIComponent(trackId)}/modules`);
  }
}

export default TrackAPI;
