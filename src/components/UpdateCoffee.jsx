import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const updateCoffee = useLoaderData();
  const { _id, name, quantity, url, taste, category, details, supplier } =
    updateCoffee;

    const handleUpdateCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const url = form.url.value;
        const updateCoffee = {name, quantity, supplier, taste, category, details, url}
    
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "PUT",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(updateCoffee)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if(data.modifiedCount > 0) {
              Swal.fire(
                'Good job!',
                'Successfully Updated',
                'success'
              )
              form.reset()
            }
          })
      }
  return (
    <div className="bg-[#F4F3F0]">
      <form onSubmit={handleUpdateCoffee} className="max-w-7xl mx-auto py-24">
        <h2 className="text-6xl text-purple-500 mb-10">Update Coffee</h2>
        {/* form row 1 */}
        <div className="flex gap-10 w-full mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Coffee name"
                className="input input-bordered w-full"
                defaultValue={name}
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Quantity"
                name="quantity"
                className="input input-bordered w-full"
                defaultValue={quantity}
              />
            </label>
          </div>
        </div>
        {/* form row 2 */}
        <div className="flex gap-10 w-full mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                placeholder="Supplier"
                className="input input-bordered w-full"
                defaultValue={supplier}
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Taste"
                name="taste"
                className="input input-bordered w-full"
                defaultValue={taste}
              />
            </label>
          </div>
        </div>
        {/* form row 3 */}
        <div className="flex gap-10 w-full mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="Category"
                className="input input-bordered w-full"
                defaultValue={category}
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Details"
                name="details"
                className="input input-bordered w-full"
                defaultValue={details}
              />
            </label>
          </div>
        </div>
        {/* form row 1 */}
        <div className="flex gap-10 w-full mb-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="url"
                placeholder="Photo URL"
                className="input input-bordered w-full"
                defaultValue={url}
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          className="btn btn-block btn-primary"
          value="Update Coffee"
        ></input>
      </form>
    </div>
  );
};

export default UpdateCoffee;
