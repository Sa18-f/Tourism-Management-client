import { useLoaderData } from "react-router-dom";
import SpotsCard from "../SpotsCard/SpotsCard";
import { useState } from "react";


const AllSpots = () => {
    const spotsData = useLoaderData();
    const [spots, setSpots] = useState(spotsData);
    const [sortOrder, setSortOrder] = useState("asc");

    const handleSortByCost = () => {
        const sortedSpots = [...spots].sort((a, b) => {
            if (sortOrder === "asc") {
                return a.average_cost - b.average_cost;
            } else {
                return b.average_cost - a.average_cost;
            }
        });
        setSpots(sortedSpots);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };
    return (
        <div>
            <div className="flex justify-center my-4">
                <div className="relative">
                    <button className="btn bg-blue-500 text-white" onClick={handleSortByCost}>
                        Sort by Cost {sortOrder === "asc" ? "↓" : "↑"}
                    </button>
                </div>
            </div>
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

export default AllSpots;