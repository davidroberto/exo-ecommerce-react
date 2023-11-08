function Products() {
  const productsFromDb = ["Mocassins à glands", "Charentaises", "Talons aiguille"];

  return (
    <main>
      {productsFromDb.map((product) => {
        return (
          <article>
            <h2>{product}</h2>
          </article>
        );
      })}
    </main>
  );
}

export default Products;
