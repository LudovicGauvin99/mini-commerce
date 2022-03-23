import { useContext } from "react";
import { PanierContext } from "../context/PanierContext";
import { Panier } from "./Panier";
import { Form } from "./Form";

export const Deconnexion = () => {
  const panierContext = useContext(PanierContext);

  const total = () => {
    let total = 0;
    panierContext.panier.map((panier) => {
      total += panier.price;
    });
    return total;
  };

  function handleClick(id) {
    panierContext.setPanier(
      panierContext.panier.filter((panier) => {
        return panier.id != id;
      })
    );
  }

  return (
    <section className="table_align">
      <br></br>
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="w-50">Nom</th>
            <th className="w-25">Prix</th>
            <th className="w-25">Action</th>
          </tr>
        </thead>
        <tbody>
          {panierContext.panier.map((panier, index) => {
            return (
              <Panier panier={panier} key={index} handleClick={handleClick} />
            );
          })}
          <br></br>
        </tbody>
        <tr>
          <td>Total</td>
          <td>{total()}€</td>
        </tr>
      </table>
      <br></br>
      <hr />
      <br></br>
      <Form />
    </section>
  );
};
