import logo from "@/assets/cat_logo@2x.png";

export default function Footer() {
  return (
    <footer className="d-flex align-items-center justify-content-center py-4">
      <img src={logo} alt="" width={30} height={30} className="me-1" />
      <p className="mb-0">&copy;{new Date().getFullYear()}</p>
    </footer>
  );
}
