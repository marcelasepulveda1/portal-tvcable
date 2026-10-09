function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {anio} CableMax - Portal de TV Cable</p>
      <p>Proyecto Fullstack 2 - Duoc UC</p>
    </footer>
  );
}

export default Footer;
