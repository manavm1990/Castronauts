import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Details from "./details";
import ModuleList from "./module-list";

export default function TrackDetail({ track }) {
  return (
    <Card className="px-4 pt-4">
      <Card.Title className="display-5 fw-bold text-center text-dark">
        {track.title}
      </Card.Title>
      <hr />
      <Card.Body>
        <Details track={track} />
        <ModuleList modules={track.modules} />
      </Card.Body>
    </Card>
  );
}

TrackDetail.defaultProps = {
  track: {
    numberOfViews: 0,
  },
};

TrackDetail.propTypes = {
  track: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    length: PropTypes.number,
    modulesCount: PropTypes.number,
    author: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      photo: PropTypes.string,
    }),
    numberOfViews: PropTypes.number,
    modules: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        length: PropTypes.string,
      })
    ),
  }).isRequired,
};
