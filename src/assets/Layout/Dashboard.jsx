import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaPaypal, FaSearch, FaShoppingCart, FaUsers, FaUtensilSpoon } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();
    // TODO get isAdmin value from database
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
{/* {dashboard side bar} */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    {
                        isAdmin ?
                            <>
                            <li><NavLink to="/dashboard/adminHome">
                        <FaHome></FaHome>
                        Admin Home</NavLink>
                    </li>
                    
                    <li><NavLink to="/dashboard/addItems">
                        <FaUtensilSpoon></FaUtensilSpoon>
                        Add Items</NavLink>
                    </li>
                    <li><NavLink to="/dashboard/manageItems">
                        <FaList></FaList>
                        Manage Items</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageBookings">
                        <FaBook></FaBook>
                        Manage Bookings</NavLink>
                    </li>
                    
                    <li><NavLink to="/dashboard/allusers">
                        <FaUsers></FaUsers>
                       All Users</NavLink>
                    </li>
</>
                        :
                            <>
                            <li><NavLink to="/dashboard/userHome">
                        <FaHome></FaHome>
                        User Home</NavLink>
                    </li>
                    
                    <li><NavLink to="/dashboard/reservation">
                        <FaCalendar></FaCalendar>
                        Reservation</NavLink>
                    </li>
                    <li><NavLink to="/dashboard/paymentHistory">
                        <FaPaypal></FaPaypal>
                        Payment</NavLink>
                    </li>
                    <li><NavLink to="/dashboard/cart">
                        <FaShoppingCart></FaShoppingCart>
                        My cart({cart.length})</NavLink>
                    </li>
                    <li><NavLink to="/dashboard/review">
                        <FaAd></FaAd>
                       Add a Review</NavLink>
                    </li>
                    <li><NavLink to="/dashboard/Booking">
                        <FaList></FaList>
                       My Booing</NavLink>
                    </li>
</>
                    }
                    
                    {/* shered nav link  */}
                    <div className="divider"></div>



                    <li><NavLink to="/">
                        <FaHome></FaHome>
                       Home</NavLink>
                    </li>
                    <li><NavLink to="/menu">
                        <FaSearch></FaSearch>
                       Menu</NavLink>
                    </li>
                    <li><NavLink to="/order/contact">
                        <FaEnvelope></FaEnvelope>
                       contact</NavLink>
                    </li>
                </ul>
                

            </div>
            <div className="flex-1 p-8">
                    
                    <Outlet></Outlet>
                </div>
        </div>
    );
};

export default Dashboard;