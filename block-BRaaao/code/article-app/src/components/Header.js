import "./Header.css";
function Header() {
  return (
    <header>
      <div className="brand">
        <h2>Logo</h2>
      </div>
      <nav>
        <ul className="navList">
          <li className="navItem">
            <a href="#">Home</a>
          </li>
          <li className="navItem">
            <a href="#">About</a>
          </li>
          <li className="navItem">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
