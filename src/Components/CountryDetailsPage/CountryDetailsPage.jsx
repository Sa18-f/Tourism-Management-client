import { useLoaderData, useParams } from "react-router-dom";


const CountryDetailsPage = () => {
    const countries = useLoaderData();
    const { id } = useParams();
    const country = countries.find(country => country._id === id);
    return (
        <div>
            <div className="flex lg:flex-row  flex-col justify-between bg-base-100 shadow-xl rounded-xl lg:my-8">
                <div className="rounded-xl lg:w-[675px]">
                    <div className="p-4">
                        <img className="rounded-xl mx-auto lg: h-[440px]" src={country.photo} alt="Album" />
                    </div>
                </div>
                <div className="lg:w-[500px] p-4">
                    <h2 className="font-bold text-xl">{country.tourist_spot_name}</h2>
                    <p className='font-semibold my-4'><span className="bg-slate-100 border text-blue-500 rounded-xl px-3 py-2"> {country.country_name} </span></p>
                    <p><span className="font-bold text-lg">Description:</span> {country.description}</p>
                    <div>
                        <p className="flex items-center font-semibold"><span className="text-lg py-3">Location: {country.location}</span></p>
                        <p className="flex items-center font-semibold"><span className="text-lg py-3">Average Cost: {country.average_cost}</span></p>
                    </div>
                    <p className="flex items-center font-semibold gap-1"><span className="text-lg">Seasonality: <span className="bg-slate-100 border text-green-500 rounded-xl px-3 py-1">{country.seasonality}</span></span></p>
                    <div className='pt-3'>
                        <button className="w-full btn bg-blue-500 text-white text-lg">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryDetailsPage;