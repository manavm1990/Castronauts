import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

export default function TrackCard({ track }) {
  return (
    <Card className="col-12 col-sm-6 col-md-4 col-lg-3">
      <Card.Img variant="top" src={track.thumbnail} />
      <Card.Body>
        <Card.Title>{track.title}</Card.Title>
        <Card.Text>{track.author.name}</Card.Text>
      </Card.Body>
    </Card>
  );
}

TrackCard.propTypes = {
  track: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    length: PropTypes.number,
    modulesCount: PropTypes.number,
    author: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      photo: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
