import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import { useParams } from "react-router-dom";
import TrackDetail from "../components/TrackDetail/track-detail";
import Query from "../components/query";
import { GET_TRACK } from "../graphql/type-defs";

export default function Track() {
  const { trackId } = useParams();

  return (
    <main className="p-4">
      <Query typeDef={GET_TRACK} queryOptions={{ variables: { trackId } }}>
        {({ track }) => {
          return (
            <Stack gap={3}>
              <Image src={track.thumbnail} fluid rounded />
              <TrackDetail track={track} />
            </Stack>
          );
        }}
      </Query>
    </main>
  );
}
