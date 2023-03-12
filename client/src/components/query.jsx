import { useQuery } from "@apollo/client";
import PropTypes from "prop-types";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

export default function Query({ typeDef, children }) {
  const { loading, error, data } = useQuery(typeDef);

  const render = () => {
    if (loading) return <Spinner animation="border" variant="success" />;
    if (error) return <Alert variant="danger">❗ Error :( 🥅</Alert>;
    if (data && data.length)
      return <Alert variant="warning">⚠️ No data :(</Alert>;

    // RENDER PROPS - a component receives a function as a prop and uses that function to render content.
    return children(data);
  };

  return (
    <Container as="main" className="bg-light py-4">
      {render()}
    </Container>
  );
}

Query.propTypes = {
  children: PropTypes.func.isRequired,
  typeDef: PropTypes.object.isRequired,
};
