import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
  const [stateData, setStateData] = useState(null);
  const { id } = useParams();
  const idInt = parseInt(id);
  const allData = useLoaderData();

  useEffect(() => {
    const singleData = allData.find((sData) => sData.id === idInt);
    if (singleData) {
      setStateData(singleData);
    } else {
      // Handle case where no data is found for the given ID
      console.error(`No data found for ID: ${idInt}`);
    }
  }, [id, allData, idInt]);

  // Render error message if stateData is null
  if (!stateData) {
    return <h1>Loading...</h1>;
  }

  // Destructure stateData
  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
  } = stateData;
  console.log(image);

  // Return JSX to display estate details
  return (
    <div>
    <Helmet>
        <title>TheEstateMarket || Details</title>
      </Helmet>
    <div className="dark:bg-gray-100 dark:text-gray-900 mt-6">
      <div className="container grid grid-cols-12 mx-auto dark:bg-gray-50">
        <div
          className="bg-no-repeat bg-cover dark:bg-gray-300 col-span-full lg:col-span-6"
          // style="background-image: url('https://source.unsplash.com/random/640x480'); background-position: center center; background-blend-mode: multiply; background-size: cover;"
          
        ><img className="rounded-2xl" src={image} alt="" /></div>
        <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-6 lg:p-10">
          <div className="flex justify-start">
            
          </div>
          <h1 className="text-3xl font-semibold ">{estate_title}</h1>
          <p className=" flex-1 py-4">
          <span className="font-bold ">Office Descriotion:</span>{` ${description}`}
          </p>

          <div className="flex items-center justify-between mb-4 ">
          <p className="flex-1 ">
          <span className="font-bold">Location:</span>{` ${location}`}
          </p>
          <p className="flex-1 ">
          <span className="font-bold">Area:</span>{` ${area}`}
          </p>
          </div>

          
          <p className="flex-1 ">
          <span className="font-bold">price:</span>{` ${price}`}
          </p>
          <p className="flex-1 ">
          <span className="font-bold">status:</span>{` ${status}`}
          </p>
          
          
          <p className="flex-1 pt-3 flex">
          <span className="font-bold mr-4">facilities:</span>{
            facilities.map((item, id) => <p key={id} className="font-bold mr-2">{`#${item}`}</p> )
          }
          </p>

          <div className="flex items-center justify-between pt-2">
            <div className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 dark:text-gray-600"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="self-center text-md">by Leroy Jenkins</span>
            </div>
            <button className="btn text-white font-bold bg-purple-500">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EstateDetails;
