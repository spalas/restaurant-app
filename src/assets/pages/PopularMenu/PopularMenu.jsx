import { useEffect, useState } from "react";
import SectionTitle from "../../../compoments/SectionTitle/SectionTitle";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch(`menu.json`)
            .then(res => res.json())
        .then(data=>setMenu(data.filter) )
     },[])

    return (
        <section>
            <SectionTitle
                heading={"From Our Menu"}
                subheading={"Popular Items"}
            ></SectionTitle>
        </section>
    );
};

export default PopularMenu;