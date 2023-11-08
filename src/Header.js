function Header() {
  const isUserLogged = false;

  return (
    <header>
      <h1>Super ecommerce</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Products</li>

          {isUserLogged ? <li>David Robert</li> : <li>Veuillez vous connecter</li>}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
