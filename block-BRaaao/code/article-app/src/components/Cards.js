import data from "../config/data";
import "./Cards.css";

function Cards() {
  return (
    <section className="cards">
      {data.map((article) => {
        return <Card {...article} />;
      })}
    </section>
  );
}

function Card(props) {
  return (
    <div className="card">
      <img src={props.urlToImage} alt="01" />
      <h3 className="uppercase col-head">{props.title}</h3>
      <p className="col-text">{props.description}</p>
      <a className="btn secondary-btn" href="##">
        learn more
      </a>
    </div>
  );
}
export default Cards;
