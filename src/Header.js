function Header() {
  const userLogged = {
    lastname: "Robert",
    firstname: "David",
    job: "web dev",
  };

  const isUserLogged = true;
  const itemsInCart = 12;

  return (
    <header>
      <h1>Super ecommerce</h1>
      <nav>
        <ul>
          {isUserLogged ? (
            <li>
              {userLogged.firstname} {userLogged.lastname} - {userLogged.job}
            </li>
          ) : (
            <li>Veuillez vous connecter</li>
          )}

          <li>Home</li>
          <li>Products</li>

          {itemsInCart > 0 ? <li>Cart : {itemsInCart}</li> : <li>Pas d'item au panier</li>}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
