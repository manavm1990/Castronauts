import { useMutation } from "@apollo/client";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { INCREMENT_TRACK_VIEWS } from "../graphql/type-defs";

export default function TrackCard({ track }) {
  const [incrementTrackViews] = useMutation(INCREMENT_TRACK_VIEWS, {
    variables: { incrementTrackViewsId: track.id },
    onCompleted(data) {
      console.log(data);
    },
  });

  return (
    <Link
      to={`/${track.id}`}
      onClick={() => {
        incrementTrackViews(track.id);
      }}
    >
      <Card>
        <Card.Img
          variant="top"
          src={track.thumbnail}
          style={{
            filter: "grayscale(60%)",
          }}
        />
        <Card.Body as="section">
          <Card.Title as="h2" className="mb-5 text-center text-dark">
            {track.title}
          </Card.Title>
          <div className="d-flex">
            <img
              src={track.author.photo}
              alt=""
              width={32}
              height={32}
              className="rounded-circle me-2"
            />
            <div className="d-flex flex-column justify-content-center lh-sm">
              <Card.Text
                className="fw-semibold mb-0 text-secondary"
                style={{ fontSize: "0.8rem" }}
              >
                {track.author.name}
              </Card.Text>
              <p className=" mb-0">
                <Card.Text as="small">{track.length}</Card.Text>
                &nbsp;&bull;&nbsp;
                <Card.Text as="small">{track.modulesCount}</Card.Text>
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Link>
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
