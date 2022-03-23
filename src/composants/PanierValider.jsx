import { PanierContext } from "../context/PanierContext";
import { useContext } from "react";

export const PanierValider = (props) => {
  const { panier } = useContext(PanierContext);

  return (
    <tr>
      <td>{props.panier.title}</td>
      <td>{props.panier.price}€</td>
    </tr>
  );
};
