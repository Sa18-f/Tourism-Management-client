import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch('https://tourism-management-server-theta.vercel.app/countries');
                if (response.ok) {
                    const data = await response.json();
                    setCountries(data);
                } else {
                    setError('Failed to fetch countries');
                }
            } catch (error) {
                console.error('Error fetching countries:', error);
                setError('Error fetching countries');
            }
        };
        fetchCountries();
    }, []);
    return (
        <div className="mb-20">
            <h1 className="text-5xl font-bold text-center mb-8 lg:mt-20 mt-8">World’s Most Beautiful <br /> Countries</h1>
            {
                error && <p>{error}</p>
            }
            <div className="grid lg:grid-cols-3 gap-6">
                {countries.map(country => (
                    <Link to={`/countries/${country._id}`} key={country._id}><div className="card bg-base-100 shadow-xl">
                        <div className='bg-[#F3F3F3] m-4 mb-0 rounded-xl'>
                            <figure>
                                <img src={country.photo} alt="Shoes" className="rounded-xl lg:h-60 w-full" />
                            </figure>
                        </div>
                        <div className="card-body">
                            <h2 className="text-2xl font-bold mt-[-10px]">{country.country_name}</h2>
                            <p className="text-sm font-semibold my-4">{country.description}</p>
                        </div>
                    </div></Link>
                ))}
            </div>
        </div>
    );
};

export default Countries;
