import { ProfilContext } from "../context/ProfilContext";
import { useContext, useEffect } from "react";
import { Profil } from "./Profil";
import { PanierValider } from "./PanierValider";
import { PanierContext } from "../context/PanierContext";

export const Valider = () => {
  const PanierCont = useContext(PanierContext);
  const { profil } = useContext(ProfilContext);

  useEffect(() => {
    window.addEventListener("unload", handleUnload);
    return () => {
      window.removeEventListener("unload", handleUnload);
      handleUnload();
    };
  });

  const handleUnload = () => {
    PanierCont.setPanier([]);
  };

  const total = () => {
    let total = 0;
    PanierCont.panier.map((panier) => {
      total += panier.price;
    });
    return total;
  };

  return (
    <section className="table_align">
      <br></br>
      <h1>Commande Validé</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
          {PanierCont.panier.map((panier, index) => {
            return <PanierValider panier={panier} key={index} />;
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
      <Profil profil={profil} />
    </section>
  );
};
