import { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {
    const { user } = UseAuth();
    const [userSpots, setUserSpots] = useState([]);

    useEffect(() => {
        if (user) {
            // Fetch user's spots data from backend
            fetch(`http://localhost:4000/myList/${user?.email}`)
                .then(res => res.json())
                .then(data => setUserSpots(data))
                .catch(error => console.error('Error fetching user spots:', error));
        }
    }, [user]);
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/spots/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        setUserSpots(prevSpots => prevSpots.filter(spot => spot._id !== id));
                    })
                    .catch(error => console.error('Error deleting spot:', error));
            }
        })
    };
    return (
        <div>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Spot Name</th>
                        <th className="px-4 py-2">Location</th>
                        <th className="px-4 py-2">Average Cost</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userSpots?.map(spot => (
                        <tr key={spot._id}>
                            <td className="border px-4 py-2">{spot.tourists_spot_name}</td>
                            <td className="border px-4 py-2">{spot.location}</td>
                            <td className="border px-4 py-2">{spot.average_cost}</td>
                            <td className="border px-4 py-2">
                                <Link to="/updatePage">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                                        Update
                                    </button>
                                </Link>
                                <button onClick={() => handleDelete(spot._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyList;