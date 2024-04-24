import {Link} from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({coffee, coffees, setCoffees}) => {
  const {name, quantity, supplier, taste, photoURL, _id} = coffee || {};

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "This Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-[#f5f4f1] shadow-xl py-10 px-3 w-full">
      <div className="flex flex-col lg:flex-row justify-between w-full">
        <div className="mr-20">
          <figure>
            <img className="w-full" src={photoURL} alt="Movie" />
          </figure>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-around w-full pr-2">
          <div className="text-start w-1/2">
            <h2 className="card-title">Name : {name}</h2>
            <p>Quantity: {quantity}</p>
            <p>Supplier: {supplier}</p>
            <p>Taste: {taste}</p>
          </div>
          <div className="card-actions justify-end w-1/2">
            <div className="join join-vertical">
              <button className="btn join-item bg-slate-500 text-white">
                View
              </button>
              <Link to={`updateCoffee/${_id}`}>
                <button className="btn join-item bg-orange-500 w-full">
                  Edit
                </button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn join-item bg-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
