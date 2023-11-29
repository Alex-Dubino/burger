import "./Burgers.scss";
export default function Cards({ img, price, title, massa }) {
  return (
    <div className="burgers__card">
      <div className="burgers__card-head">
        <img src={img} alt="#" />
      </div>
      <div className="burgers__card-body">
        <span className="price">{price}</span>
        <span className="title">{title}</span>
        <span className="massa">{massa}</span>
      </div>
      <div className="burgers__card-footer">
        <a href="#">Добавить</a>
      </div>
    </div>
  );
}
