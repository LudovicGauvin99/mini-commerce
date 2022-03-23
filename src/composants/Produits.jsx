export const Produits = (props) => {
  return (
    <div className="card col-3">
      <h3 className="card-title">{props.produit.title}</h3>
      <p className="card-body">{props.produit.description}</p>
      <div className="row">
        <button
          className="btn btn-dark btn-sm col"
          onClick={() => props.handleClick(props.produit)}
        >
          Ajouter au panier
        </button>
        <span className="col" />
        <div className="col">
          <b className="price">{props.produit.price}€</b>
        </div>
      </div>
    </div>
  );
};
