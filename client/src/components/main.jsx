import { useQuery } from "@apollo/client";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { TRACKS } from "../graphql/type-defs";
import TrackCard from "./track-card";

export default function Main() {
  // TODO: Move to custom 🪝 hook.
  const { loading, error, data } = useQuery(TRACKS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  return (
    <Container as="main" className="bg-light py-4">
      <Row>
        {data?.tracks.map((track) => (
          <Col key={track.id} md={4} className="my-2">
            <TrackCard track={track} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
