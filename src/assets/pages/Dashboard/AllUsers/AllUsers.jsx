import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const AllUsers = () => {
  const axiosSecure = useAxiosSecure()

    const { data: users=[] } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        }
    })
    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users: {users.length}</h2>
            </div>
            <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Rule</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
         users.map((user, index)=><tr key={user._id}>
             <th>{index +1 }</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            
            </tr>)
     }                      
      
      
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default AllUsers;