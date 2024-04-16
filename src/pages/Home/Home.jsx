import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import EstateCard from "../EstateCard/EstateCard";

const Home = () => {
  const estateNews = useLoaderData();
  console.log(estateNews);

  return (
    <div>
      <div className="my-12">
      <Banner />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {estateNews.map((estate, index) => (
        <EstateCard key={index} estate={estate} />
      ))}
      </div>
    </div>
  );
};

export default Home;
