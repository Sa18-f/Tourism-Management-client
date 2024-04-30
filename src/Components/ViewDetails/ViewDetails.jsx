
import { useLoaderData, useParams } from "react-router-dom";


const ViewDetails = () => {

    const spots = useLoaderData();
    const { id } = useParams();
    const spot = spots.find(spot => spot._id === id);


    return (
        <div>
            <div className="flex lg:flex-row  flex-col justify-between bg-base-100 shadow-xl rounded-xl lg:my-8">
                <div className="rounded-xl lg:w-[675px]">
                    <div className="p-4">
                        <img className="rounded-xl mx-auto lg: h-[440px]" src={spot.photo} alt="Album" />
                    </div>
                </div>
                <div className="lg:w-[500px] p-4">
                    <h2 className="font-bold text-xl">{spot.tourists_spot_name}</h2>
                    <p className='font-semibold my-4'><span className="bg-slate-100 border text-blue-500 rounded-xl px-3 py-2"> {spot.country_Name} </span></p>
                    <p><span className="font-bold text-lg">Description:</span> {spot.description}</p>
                    <div>
                        <p className="flex items-center font-semibold pt-3"><span className="text-lg">Travel Time: {spot.travel_time}</span></p>
                        <p className="flex items-center font-semibold"><span className="text-lg py-3">Location: {spot.location}</span></p>
                        <p className="flex items-center font-semibold"><span className="text-lg">Total Visitors Per Year: {spot.totalVisitorsPerYear}</span></p>
                        <p className="flex items-center font-semibold"><span className="text-lg py-3">Average Cost: {spot.average_cost}</span></p>
                    </div>
                    <p className="flex items-center font-semibold gap-1"><span className="text-lg">Seasonality: <span className="bg-slate-100 border text-green-500 rounded-xl px-3 py-1">{spot.seasonality}</span></span></p>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;