import { regular } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

export default function TrackDetail({ track }) {
  return (
    <Card className="px-4 pt-4">
      <Card.Title className="display-5 fw-bold text-center text-dark">
        {track.title}
      </Card.Title>
      <hr />
      <Card.Body>
        <section className="d-flex justify-content-between">
          <section>
            <h2>Track Details</h2>
            <FontAwesomeIcon icon={regular("coffee")} />
          </section>
        </section>
      </Card.Body>
    </Card>
  );
}

TrackDetail.propTypes = {
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
    }),
  }).isRequired,
};
