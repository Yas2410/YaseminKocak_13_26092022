import "../styles/footer.css";

export default function Footer() {
  //Méthode getFullYear() : renvoie l'année de la date
  //renseignée d'après l'heure locale
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">Copyright {currentYear} Argent Bank</p>
    </footer>
  );
}
