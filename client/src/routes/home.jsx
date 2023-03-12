import { useQuery } from "@apollo/client";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import TrackCard from "../components/track-card";
import { TRACKS } from "../graphql/type-defs";

export default function Main() {
  const { loading, error, data } = useQuery(TRACKS);

  const render = () => {
    if (loading)
      return (
        <Spinner animation="border" variant="success">
          <p className="visually-hidden">Loading...</p>
        </Spinner>
      );

    if (error) return <Alert variant="danger">Error :(</Alert>;

    return (
      <Row>
        {data?.tracks.map((track) => (
          <Col key={track.id} md={4} className="my-2">
            <TrackCard track={track} />
          </Col>
        ))}
      </Row>
    );
  };

  return (
    <Container as="main" className="bg-light py-4">
      {render()}
    </Container>
  );
}
