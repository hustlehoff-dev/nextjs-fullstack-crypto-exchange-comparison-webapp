import "./CtaButton.scss";
export default function CtaButton({ children }: { children: string }) {
  return (
    <a href="/kontakt" className="cta-button">
      {children}
    </a>
  );
}
