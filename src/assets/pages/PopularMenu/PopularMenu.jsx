
import SectionTitle from "../../../compoments/SectionTitle/SectionTitle";
import MenuItem from "../Sheared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === "popular");

    return (
        <section className="mb-12">
            <SectionTitle
                heading={"From Our Menu"}
                subheading={"Popular Items"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>


            <button className="btn btn-outline border-0 border-b-4 mt-4">view full menu</button>
        </section>
    );
};

export default PopularMenu;