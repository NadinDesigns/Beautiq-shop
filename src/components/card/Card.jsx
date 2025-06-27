import { Link } from "react-router-dom";
import "./Card.css";

export const Card = ({ id, title, price, address, data, img }) => {
  return (
    <>
      <Link to={`/product/${id}`} className="card">
        <div className="card--img">
          <img src={`${img}`} alt="" />
        </div>
        <h5 className="card--title">{title}</h5>
        <strong>{price}</strong>
        <div className="card--box">
          <span>{address}</span>
          <span>{data}</span>
        </div>
      </Link>
    </>
  );
};
