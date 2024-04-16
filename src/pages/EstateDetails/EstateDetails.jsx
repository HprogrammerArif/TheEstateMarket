import { useParams } from "react-router-dom";

const EstateDetails = () => {

  const {id} = useParams();
  

  return (
    <div>
      <h1>Estate card details</h1>
      {id}
    </div>
  );
};

export default EstateDetails;