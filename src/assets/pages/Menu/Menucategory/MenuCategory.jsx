import { Link } from "react-router-dom";
import Cover from "../../Sheared/Cover/Cover";
import MenuItem from "../../Sheared/MenuItem/MenuItem";


const MenuCategory = ({items, title, img}) => {
    return (
        <div className="pt-8">
        {title && <Cover img={img} title={title} ></Cover>}
            <div className="grid md:grid-cols-2 gap-4  p-8">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        <Link to={`/order/${title}`}><button className='btn btn-outline border-2 border-stone-500 border-b-4 mt-4 text-blue-400'>Add to cart</button></Link>
            
        </div>
    );
};

export default MenuCategory;