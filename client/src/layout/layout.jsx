import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Layout() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "min-content 1fr min-content",
        height: "100vh",
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
