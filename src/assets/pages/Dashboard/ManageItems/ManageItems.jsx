import { FaEdit, FaTrashAlt, FaUsers } from "react-icons/fa";
import SectionTitle from "../../../../compoments/SectionTitle/SectionTitle";
import useMenu from "../../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";




const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem =(item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then( async(result) => {
              if (result.isConfirmed) {
                
                  const res = await axiosSecure.delete(`/menu/${item._id}`);
                  if (res.data.deletedCount > 0) { 
                      refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} deleted successfully`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                  }
           
            }
          });

     }

    return (
        <div>
            <SectionTitle heading = "Manage All Items" subheading="Hurry up"></SectionTitle>
            <div>
            <div className="overflow-x-auto ">
            <table className="table w-full">
                 {/* head */}
                 <thead>
                    <tr>
                        <td>
                        #
                        </td>
                        <th>Image</th>
                        <th>Item name</th>
                        <th>Price</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                            {

                            menu.map(( item, index)=><tr key={item._id}>
                                <td>
                                    {index +1 }        
                                </td>
                                <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                    </div>
                                    
                                </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td className="text-right">${item.price}</td>
                                <Link to = {`/dashboard/updateItem/${item._id}`}>
                                <button
                                    className="btn btn-sm m-5 bg-orange-500">
                                    <FaEdit  className="text-white font-2xl"></FaEdit>
                                   
                                </button>
                                </Link>
                                
                                <td>
                                
                                <button
                                    onClick={() => handleDeleteItem(item)}
                                    className="btn btn-ghost btn-xs">
                                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                               </td>
                            </tr>)
                                
                            }
                    
     
    </tbody>
    
    
  </table>
</div>
                
            </div>
        </div>

        
    );
};

export default ManageItems;