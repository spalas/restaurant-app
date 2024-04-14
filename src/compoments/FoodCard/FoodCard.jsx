import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";




const FoodCard = ({ item }) => {
    
    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();



    const handleAddToCart = food => {
        



        if(user && user.email){
            //    sead to database  item to the database
            

            console.log(user.email, food);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
                
            }
            axiosSecure.post("/carts", cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your item to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                          });
                    }
            })
        }
        else {
            Swal.fire({
                title: "Your are not logged in",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login"
              }).then((result) => {
                if (result.isConfirmed) {
                  
                 navigate("/login")
                  
                }
              });
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className=    'bg-slate-900 absolute right-2 pt-2 p-2 rounded text-white'>${ price}</p>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{recipe}</p>
            <div className="card-actions justify-end">
                    <button
                    onClick={()=>handleAddToCart(item)}    className="btn btn-primary ">Add to cart</button>
            </div>
         </div>
</div>
    );
};

export default FoodCard;
