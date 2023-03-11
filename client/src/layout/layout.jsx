import PropTypes from "prop-types";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Layout({ children }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "min-content 1fr min-content",
        height: "100vh",
      }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
