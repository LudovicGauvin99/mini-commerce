import { useContext, useState } from "react";
import { Produits } from "./Produits";
import { PanierContext } from "../context/PanierContext";

export const Accueil = () => {
  const { panier } = useContext(PanierContext);

  const [produits, setProduits] = useState([
    { id: 1, title: "Produit 1", description: "Produit 1", price: 10 },
    { id: 2, title: "Produit 2", description: "Produit 2", price: 20 },
    { id: 3, title: "Produit 3", description: "Produit 3", price: 30 },
    { id: 4, title: "Produit 4", description: "Produit 4", price: 40 },
    { id: 5, title: "Produit 5", description: "Produit 5", price: 50 },
  ]);

  function handleClick(produit) {
    panier.push(produit);
  }

  return (
    <section className="row articles">
      {produits.map((produit, index) => {
        return (
          <Produits produit={produit} key={index} handleClick={handleClick} />
        );
      })}
    </section>
  );
};
