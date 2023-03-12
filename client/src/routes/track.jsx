import { useParams } from "react-router-dom";
import Query from "../components/query";
import { GET_TRACK } from "../graphql/type-defs";

export default function Track() {
  const { trackId } = useParams();

  return (
    <Query typeDef={GET_TRACK} queryOptions={{ variables: { trackId } }}>
      {({ track }) => {
        return <h1>{track.title}</h1>;
      }}
    </Query>
  );
}
