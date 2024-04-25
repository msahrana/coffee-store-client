import {useState} from "react";
import {useLoaderData} from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const updatedUsers = useLoaderData();
  const [users, setUsers] = useState(updatedUsers);

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
        fetch(`http://localhost:5000/user/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
              });
              const remaining = users.filter((item) => item._id !== _id);
              setUsers(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <h1 className="text-center text-4xl font-semibold my-10">
        All Users:{users.length}
      </h1>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="dark:bg-gray-300">
              <tr className="text-left">
                <th className="p-3">#</th>
                <th className="p-3">Name</th>
                <th className="p-3">PhotoURL</th>
                <th className="p-3">Email</th>
                <th className="p-3 text-right">Action</th>
                <th className="p-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user._id}
                  className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
                >
                  <td className="p-3">
                    <p>{index + 1}</p>
                  </td>
                  <td className="p-3">
                    <p>{user.name}</p>
                  </td>
                  <td className="p-3">
                    <p>{user.photoURL}</p>
                  </td>
                  <td className="p-3">
                    <p>{user.email}</p>
                  </td>
                  <td className="p-3 text-right">
                    <button className="bg-orange-500 px-3 py-0 rounded text-xl">
                      Edit
                    </button>
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="bg-red-500 px-3 py-0 rounded text-xl"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
