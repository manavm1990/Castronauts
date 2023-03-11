import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./layout/main";

export default function App() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "min-content 1fr min-content",
        height: "100vh",
      }}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
