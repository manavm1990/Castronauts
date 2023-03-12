import { calcHumanReadableTimeFromSeconds } from "@/utils";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { BookOpen, Clock, Eye, Play } from "react-feather";
import ListItem from "../list-item";

export default function Details({ track }) {
  return (
    <section className="d-flex flex-column align-items-center">
      <section className="border-bottom pb-4">
        <h2 className="fw-bold text-center text-dark">Track Details</h2>
        <ul className="text-secondary">
          <ListItem>
            <Eye />
            <span className="text-primary">
              {track.numberOfViews}&nbsp;
              {track.numberOfViews === 1 ? "View" : "Views"}
            </span>
          </ListItem>
          <ListItem>
            <BookOpen /> {track.modulesCount}{" "}
            {track.modulesCount === 1 ? "Module" : "Modules"}
          </ListItem>
          <ListItem>
            <Clock /> {calcHumanReadableTimeFromSeconds(track.length)}
          </ListItem>
        </ul>
      </section>
      <section className="border-bottom py-4">
        <h2 className="fw-bold text-center text-dark ">Author</h2>
        <ul className="text-secondary">
          <li className="d-flex flex-column align-items-center gap-1">
            <img
              src={track.author.photo}
              alt={track.author.name}
              className="rounded-circle"
              style={{ width: "50px", height: "50px" }}
            />
            <span className="text-primary">{track.author.name}</span>
          </li>
        </ul>
      </section>
      <div className="border-bottom py-4">
        <Button
          variant="primary"
          className="bg-primary border border-secondary mt-4 text-white"
        >
          <Play /> Track
        </Button>
      </div>
    </section>
  );
}

Details.propTypes = {
  track: PropTypes.object.isRequired,
};
