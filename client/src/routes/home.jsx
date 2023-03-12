import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Query from "../components/query";
import TrackCard from "../components/track-card";
import { TRACKS } from "../graphql/type-defs";

export default function Main() {
  return (
    <Query typeDef={TRACKS}>
      {({ tracks }) => (
        <Row>
          {tracks.map((track) => (
            <Col key={track.id} md={4} className="my-2">
              <TrackCard track={track} />
            </Col>
          ))}
        </Row>
      )}
    </Query>
  );
}
