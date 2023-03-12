import PropTypes from "prop-types";

export default function ListItem({ children }) {
  return (
    <li className="my-2 d-flex align-items-center justify-content-center gap-2">
      {children}
    </li>
  );
}

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
};
