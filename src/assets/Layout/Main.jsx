
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Sheared/Footer';
import Navbar from '../pages/Sheared/Navbar/Navbar';

const Main = () => {
    const location = useLocation();
    console.log(location);

    const noheaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')


    return (
        <div>
            {noheaderFooter || <Navbar></Navbar> }
            <Outlet></Outlet>
            {noheaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;