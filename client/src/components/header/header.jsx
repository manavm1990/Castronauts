import logo from "@/assets/space_cat_logo@2x.png";

export default function Header() {
  return (
    <header className="container py-3">
      <figure className="d-flex align-items-center justify-content-center">
        <img
          src={logo}
          alt="Space Cat Logo - pink circle with 😸 in 🧑‍🚀 suit"
          width={60}
          height={60}
          className="me-2"
        />
        <figcaption>
          <h1 className="h4 fw-bold my-0">Castronaut</h1>
          <h2 className="h6 fw-normal my-0">Kitty Space Academy</h2>
        </figcaption>
      </figure>
    </header>
  );
}
