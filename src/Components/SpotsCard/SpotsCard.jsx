import { Link } from "react-router-dom";


const SpotsCard = ({ spots }) => {
    const { tourists_spot_name, location, country_Name, seasonality, photo, _id } = spots;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className='bg-[#F3F3F3] m-4 mb-0 rounded-xl'>
                <figure>
                    <img src={photo} alt="Shoes" className="rounded-xl lg:h-60 w-full" />
                </figure>
            </div>
            <div className="card-body">
                <div className='border-dashed border-b'>
                    <h2 className="text-2xl font-bold">{tourists_spot_name}</h2>
                    <p className='font-semibold my-4'><span className="bg-slate-100 border text-blue-500 rounded-xl px-3 py-2">{country_Name}</span></p>
                </div>
                <div className="flex gap-4 lg:flex-col ">
                    <p className="flex items-center font-semibold"><span className="text-lg">Location : {location} </span></p>
                    <p className="flex items-center font-semibold gap-1"><span className="text-lg">Seasonality: <span className="bg-slate-100 border text-green-500 rounded-xl px-3 py-1"> {seasonality}</span> </span></p>
                </div>
                <Link to={`/spots/${_id}`}>
                    <div className='pt-3'>
                        <button className="w-full btn bg-blue-500 text-white text-lg">View Details</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default SpotsCard;