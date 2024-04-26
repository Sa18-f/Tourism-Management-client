import { useLoaderData } from "react-router-dom";
import SpotsCard from "../SpotsCard/SpotsCard";


const AllSpots = () => {
    const spots = useLoaderData();
    return (
        <div className='grid md:grid-cols-3 gap-4'>
            {
                spots.map(spots => <SpotsCard
                    key={spots._id}
                    spots={spots}
                ></SpotsCard>)
            }
        </div>
    );
};

export default AllSpots;