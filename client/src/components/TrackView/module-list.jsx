import { calcHumanReadableTimeFromSeconds } from "@/utils";
import PropTypes from "prop-types";
import ListItem from "../list-item";

export default function ModuleList({ modules }) {
  return (
    <section className="mt-4">
      <h2 className="fw-bold text-center text-dark">Modules</h2>
      <ul className="text-secondary">
        {modules.map((module) => (
          <ListItem key={module.id}>
            <h3 className="h6 mb-0">{module.title}</h3>
            <p className="mb-0">
              {calcHumanReadableTimeFromSeconds(module.length)}
            </p>
          </ListItem>
        ))}
      </ul>
    </section>
  );
}

ModuleList.propTypes = {
  modules: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      length: PropTypes.string,
    })
  ),
};
