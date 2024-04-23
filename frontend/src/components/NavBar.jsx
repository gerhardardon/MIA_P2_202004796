import { FaHome } from "react-icons/fa";

export function NavBar() {
  return (
    <nav>
      <div className="navbar-links-container">
        <a href="/"><FaHome/> Home</a>
        <a href="#/console">Consola</a>
        <a href="#/explore">Explorar</a>
        <a href="/">Reportes</a>
      </div>
    </nav>
  );
}