import { RESTDataSource } from "@apollo/datasource-rest";

const BASE_URL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = BASE_URL;
  }

  indexTracks() {
    return this.get("tracks");
  }

  showAuthor(authorId) {
    return this.get(`author/${encodeURIComponent(authorId)}`);
  }

  showTrack(trackId) {
    return this.get(`track/${encodeURIComponent(trackId)}`);
  }
}

export default TrackAPI;
