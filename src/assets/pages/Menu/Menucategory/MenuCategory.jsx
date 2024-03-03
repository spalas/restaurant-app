import Cover from "../../Sheared/Cover/Cover";
import MenuItem from "../../Sheared/MenuItem/MenuItem";


const MenuCategory = ({items, title, img, decsript}) => {
    return (
        <div className="pt-8">
        {title && <Cover img={img} title={title} decsript={decsript}></Cover>}
            <div className="grid md:grid-cols-2 gap-4  p-8">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;