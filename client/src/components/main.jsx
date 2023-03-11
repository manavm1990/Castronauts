import { useQuery } from "@apollo/client";
import Container from "react-bootstrap/Container";
import { TRACKS } from "../graphql/type-defs";
import TrackCard from "./track-card";

export default function Main() {
  // TODO: Move to custom 🪝 hook.
  const { loading, error, data } = useQuery(TRACKS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  return (
    <Container as="main" fluid className="bg-light">
      {data?.tracks.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </Container>
  );
}
