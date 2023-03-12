import { useQuery } from "@apollo/client";
import PropTypes from "prop-types";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";

export default function Query({ typeDef, children }) {
  const { loading, error, data } = useQuery(typeDef);

  if (loading)
    return (
      <Spinner animation="border" variant="success">
        <p className="visually-hidden">Loading...</p>
      </Spinner>
    );

  if (error) return <Alert variant="danger">❗ Error :( 🥅</Alert>;

  if (data && data.length)
    return <Alert variant="warning">⚠️ No data :(</Alert>;

  // RENDER PROPS - a component receives a function as a prop and uses that function to render content
  return children(data);
}

Query.propTypes = {
  children: PropTypes.func.isRequired,
  typeDef: PropTypes.object.isRequired,
};
