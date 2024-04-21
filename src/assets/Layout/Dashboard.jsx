import { FaAd, FaCalendar, FaHome, FaList, FaPaypal, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";


const Dashboard = () => {
const [cart] = useCart()

    return (
        <div className="flex">
{/* {dashboard side bar} */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
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
                    <div className="divider"></div>
                    <li><NavLink to="/">
                        <FaHome></FaHome>
                       Home</NavLink>
                    </li>
                    <li><NavLink to="/menu">
                        <FaSearch></FaSearch>
                       Menu</NavLink>
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