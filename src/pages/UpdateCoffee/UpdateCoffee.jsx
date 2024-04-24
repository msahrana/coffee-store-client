import {useLoaderData} from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const {name, quantity, supplier, taste, category, photoURL, details, _id} =
    coffee || {};

  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoURL = form.photoURL.value;
    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photoURL,
    };
    console.log(updatedCoffee);
    /* for server */
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Coffee updated successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="bg-[#f4f3f0] lg:mx-48 p-10 lg:text-center mt-10 rounded">
      <h2 className="text-xl lg:text-5xl font-bold">Update Coffee:{name}</h2>
      <form onSubmit={handleAddCoffee}>
        {/* form row */}
        <div className="flex flex-col lg:flex-row lg:my-6">
          <label className="form-control w-full lg:w-1/2">
            <div className="label">
              <span className="text-xl">Coffee name</span>
            </div>
            <input
              type="text"
              placeholder="Coffee Name"
              name="name"
              defaultValue={name}
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full lg:w-1/2 lg:ml-5">
            <div className="label">
              <span className="text-xl">Available Quantity</span>
            </div>
            <input
              type="text"
              placeholder="Available Quantity"
              name="quantity"
              defaultValue={quantity}
              className="input input-bordered w-full"
            />
          </label>
        </div>
        {/* form row */}
        <div className="flex flex-col lg:flex-row lg:mb-6">
          <label className="form-control w-full lg:w-1/2">
            <div className="label">
              <span className="text-xl">Supplier</span>
            </div>
            <input
              type="text"
              placeholder="Supplier"
              name="supplier"
              defaultValue={supplier}
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full lg:w-1/2 lg:ml-5">
            <div className="label">
              <span className="text-xl">Taste</span>
            </div>
            <input
              type="text"
              placeholder="Taste"
              name="taste"
              defaultValue={taste}
              className="input input-bordered w-full"
            />
          </label>
        </div>
        {/* form row */}
        <div className="flex flex-col lg:flex-row lg:mb-6">
          <label className="form-control w-full lg:w-1/2">
            <div className="label">
              <span className="text-xl">Category</span>
            </div>
            <input
              type="text"
              placeholder="Category"
              name="category"
              defaultValue={category}
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full lg:w-1/2 lg:ml-5">
            <div className="label">
              <span className="text-xl">Details</span>
            </div>
            <input
              type="text"
              placeholder="Details"
              name="details"
              defaultValue={details}
              className="input input-bordered w-full"
            />
          </label>
        </div>
        {/* form row */}
        <div className="flex mb-6">
          <label className="form-control w-full">
            <div className="label">
              <span className="text-xl">photoURL</span>
            </div>
            <input
              type="text"
              placeholder="photoURL"
              name="photoURL"
              defaultValue={photoURL}
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div>
          <input
            type="submit"
            value="Update Coffee"
            className="btn bg-[#d2b48c] w-full mt-4 text-xl font-bold"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
