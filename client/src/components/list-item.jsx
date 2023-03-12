import PropTypes from "prop-types";

export default function ListItem({ children }) {
  return <li className="d-flex align-items-center gap-1 my-2">{children}</li>;
}

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
};
