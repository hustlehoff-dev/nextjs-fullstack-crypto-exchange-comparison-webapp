import "./Footer.scss";

export function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-column">
          <div className="logo">
            <a href="/">
              <img src="/ka-logo.png" alt="Robimy Dobrze Strony" />
            </a>
          </div>
          <h2>CryptoDepths</h2>
          <h3>Crypto Exchange Comparison Tool</h3>
        </div>
        <div className="footer-column">
          <ul>
            <li>Heading</li>
            <li className="hover-underline-animation left">Link 1</li>
            <li className="hover-underline-animation left">Link 2</li>
          </ul>
          <ul>
            <li>Heading</li>
            <li className="hover-underline-animation left">Link 1</li>
            <li className="hover-underline-animation left">Link 2</li>
          </ul>
          <ul>
            <li>Sociale</li>
            <li className="hover-underline-animation left">Facebook</li>
            <li className="hover-underline-animation left">Instagram</li>
          </ul>
        </div>
        <div className="footer-copyright">
          RobimyDobrzeStrony. All Rights Reserved © 2025
        </div>
      </div>
    </footer>
  );
}
