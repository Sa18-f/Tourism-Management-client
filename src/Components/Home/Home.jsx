import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import SpotsCard from "../SpotsCard/SpotsCard";



const Home = () => {
  const spots = useLoaderData();
  return (
    <div>
      <Header></Header>
      <h1 className='text-6xl text-center my-8 font-bold'>Famous Tourist <br /> Spots</h1>
      <div className='grid md:grid-cols-3 gap-4'>
        {
          spots.map(spots => <SpotsCard
            key={spots._id}
            spots={spots}
          ></SpotsCard>)
        }
      </div>
    </div>
  );
};

export default Home;