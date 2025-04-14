import CtaButton from "../cta-button/CtaButton";
import "./Nav.scss";

export default function Nav() {
  return (
    <header className="nav-wrapper">
      <nav className="nav-container">
        <div className="logo">
          <a href="/">
            <img
              src="/comeincrypto-logo-100x100.png"
              alt="CrytpoDepths Comparison Tool"
            />
          </a>
        </div>

        <ul className="nav-links ">
          <li className="hover-underline-animation left">
            <a href="/o-nas">Link 1</a>
          </li>
          <li className="hover-underline-animation left">
            <a href="/uslugi">Link 2</a>
          </li>
          <li className="hover-underline-animation left">
            <a href="/uslugi">Link 3</a>
          </li>
        </ul>
        <CtaButton>CTA Button</CtaButton>
      </nav>
    </header>
  );
}
