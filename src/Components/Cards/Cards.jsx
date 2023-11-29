import { useState } from "react";
import "./Cards.scss";
import del from "../../assets/close.svg";
export default function Cards({
  delCards,
  img,
  editAllProductsCount,
  context,
  weight,
  id,
  cost,
  confCost,
  editAllPrice,
}) {
  const [num, setNum] = useState(1);

  function editCount(amper) {
    if (String(amper) === "-1" && num === 1) {
      delCards(id);
    }
    const result = num + amper;
    editAllProductsCount(amper);
    setNum(result);
    editAllPrice(confCost, amper);
  }
  return (
    <div className="container_card">
      <div className="wr-content">
        <div className="wr-img">
          <img src={img} alt="#" />
        </div>

        <div className="info_func">
          <div className="title">
            <h3>{context}</h3>
          </div>
          <div className="massa">{weight}</div>
          <div className="price">{cost}</div>
        </div>
      </div>
      <div className="basket">
        <img src={del} onClick={() => delCards(id)} alt="#" />
      </div>
      <div className="wt_button">
        <button
          onClick={() => {
            editCount(-1);
          }}
        >
          -
        </button>
        <span>{num}</span>
        <button
          onClick={() => {
            editCount(+1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
