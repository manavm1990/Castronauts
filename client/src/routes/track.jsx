import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import { useParams } from "react-router-dom";
import TrackView from "../components/TrackView/track-view";
import Query from "../components/query";
import { GET_TRACK } from "../graphql/type-defs";

export default function Track() {
  const { trackId } = useParams();

  return (
    <main className="bg-light p-4">
      <Query typeDef={GET_TRACK} queryOptions={{ variables: { trackId } }}>
        {({ track }) => {
          return (
            <Stack gap={3}>
              <Image src={track.thumbnail} fluid rounded />
              <TrackView track={track} />
              <footer className="text-center text-secondary">
                {track.description}
              </footer>
            </Stack>
          );
        }}
      </Query>
    </main>
  );
}
