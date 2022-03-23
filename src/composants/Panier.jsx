import { PanierContext } from "../context/PanierContext";
import { useContext } from "react";

export const Panier = (props) => {
  const { panier } = useContext(PanierContext);

  return (
    <tr id={props.panier.id}>
      <td>{props.panier.title}</td>
      <td>{props.panier.price}€</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => props.handleClick(props.panier.id)}
        >
          Supprimer du panier
        </button>
      </td>
    </tr>
  );
};
