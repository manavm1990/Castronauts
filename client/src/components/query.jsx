import { useQuery } from "@apollo/client";
import PropTypes from "prop-types";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

export default function Query({ typeDef, queryOptions, children }) {
  const { loading, error, data } = useQuery(typeDef, queryOptions);

  const render = () => {
    if (loading) return <Spinner animation="border" variant="success" />;
    if (error) return <Alert variant="danger">❗ Error :( 🥅</Alert>;
    if (data && data.length === 0)
      return <Alert variant="warning">⚠️ No data :(</Alert>;
  };

  return data ? (
    children(data)
  ) : (
    <Container
      as="main"
      className="bg-light py-4 d-flex align-items-center justify-content-center"
    >
      {render()}
    </Container>
  );
}

Query.defaultProps = {
  queryOptions: {},
};

Query.propTypes = {
  typeDef: PropTypes.object.isRequired,
  queryOptions: PropTypes.object,
  children: PropTypes.func.isRequired,
};
