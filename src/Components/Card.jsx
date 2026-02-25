// import styles from "./Card.module.css";

const Card = ({ title, value }) => {
  return (
    <div className="card flex-grow-1 p-2 mx-4 my-4 Card-bg">
      <h5>{title}</h5>
      <p>{value}</p>
    </div>
  );
};

export default Card;
