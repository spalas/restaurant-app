
import SectionTitle from '../../../../compoments/SectionTitle/SectionTitle';
import FeaturedImg from "../../../image/featured.jpg"
import "./Featured.css"


const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-10 my-20'>
            <SectionTitle
                subheading="Check it out" heading="Featured item"
            ></SectionTitle>
            <div className='flex justify-center items-center bg-slate-500 bg-opacity-35 py-20 pt-12 px-36'>
                <div>
                    <img src={FeaturedImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Oct 20, 2024</p>
                    <p> Where can i get some?</p>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima velit voluptatum odio recusandae dolore aliquam non est nesciunt repellat omnis vel similique iusto corporis ad, quos tempora animi unde nemo doloribus voluptatibus eveniet? Tempora illo qui voluptate cupiditate ea libero distinctio pariatur maxime harum consectetur odio esse alias quos id eum, assumenda hic et tenetur modi iusto voluptatum? Dolorum tenetur officiis mollitia   </p>
                    <button className='btn btn-outline border-0 border-b-4 mt-4 text-white'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;