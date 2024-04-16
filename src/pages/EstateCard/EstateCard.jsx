import { Link } from "react-router-dom";

const EstateCard = ({estate}) => {


  const {id, image, estate_title, description} = estate;

  //console.log(id, image, estate_title, );

  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl ">
        <figure>
          <img className="max-h-[270px] w-full"
            src={image}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{estate_title}</h2>
          <p>{description}</p>
          <div className="card-actions">
            <Link to={`/details/${id}`}>
            <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;
