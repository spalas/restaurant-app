import { Helmet  } from 'react-helmet-async';
import Cover from '../../Sheared/Cover/Cover';
import MenuImg from "../../../image/01.jpg";
import DessertImg from "../../../image/02.jpg";
import SoupImg from "../../../image/03.png";
import SaladImg from "../../../image/04.jpg";
import pizzaImag from "../../../image/05.png";

import useMenu from '../../../../hooks/useMenu';
import SectionTitle from '../../../../compoments/SectionTitle/SectionTitle';
import MenuCategory from '../Menucategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === "dessert");
    const soups = menu.filter(item => item.category === "soup");
    const salads = menu.filter(item => item.category === "salad");
    const pizzas = menu.filter(item => item.category === "pizza");
    const offered = menu.filter(item => item.category === "offered");
    const recipes = menu.filter(item => item.category === "recipe");
    return (
        <div>
            <Helmet>
                <title>Blackpepper | Menu</title>
            </Helmet>
            <Cover img={MenuImg} title="Our menu"></Cover>
           {/* main cover */}
            <SectionTitle subheading="Don't Miss" heading="Today's offer"></SectionTitle>
            {/* offered mneu items */}
            <MenuCategory items={offered} ></MenuCategory>
            {/* dessert menu item */}
            <MenuCategory items={desserts}
                title="desserts"
                img={DessertImg}
            ></MenuCategory>
            <MenuCategory items={soups}
                title="soups"
                img={SoupImg}
            ></MenuCategory>
            <MenuCategory items={salads}
                title="Salad"
                img={SaladImg}
                recipe={recipes}
            ></MenuCategory>
            <MenuCategory items={pizzas}
                title="pizza"
                recipes={recipes}
                img={pizzaImag}
            ></MenuCategory>

            
            
        </div>
    );
};

export default Menu;