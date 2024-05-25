import { useForm } from "react-hook-form";
import SectionTitle from "../../../../compoments/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const image_hostig_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hostig_key}`;


const UpdateItem = () => {
    const { name, category, recipe, price, _id } = useLoaderData();

    const { register, handleSubmit ,} = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile,{
            headers: {
                "content-type": 'multipart/form-data'
            }

        })
        if (res.data.success) {
            // now send menu item to the server with the image

            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url,
            }

            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) { 
                // popup
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is successfully`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }

        }
        console.log(res.data)
    }

    return (
        <div>
            <SectionTitle heading="Update the menu" subheading="Refresh Info"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="form-control w-full my-6">
                    <lebel className="label">
                        <span className="label-text">Recipe name*</span>
                        
                    </lebel>
                        <input type="text"
                            defaultValue={name}
                            placeholder="Recipe Name"
                            {...register("name",{required: true})}
                            required
                            className="input input-bordered w-full " />
                    
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                    <lebel className="label">
                        <span className="label-text">Category*</span>
                        
                    </lebel>
                <select  defaultValue= {category} {...register("category",{required: true})}
                className="select select-warning w-full ">
                 
                <option disabled  value = "default">Select a category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>

                </select>
                    
                    </div>

                        {/* price*/}
                        <div className="form-control w-full my-6">
                    <lebel className="label">
                        <span className="label-text">Price*</span>
                        
                    </lebel>
                            <input
                                type="number"
                                defaultValue={price}
                                
                            placeholder="price"
                            {...register("price", {required: true})}
                            className="input input-bordered w-full " />
                    
                    </div>
                    </div>
    
                    <label className="form-control">
                    <div className="label">
                        <span className="label-text">Recipe Details</span>
                        
                    </div>
                        <textarea defaultValue={recipe} {... register('recipe',{required: true})}
                            className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                    
                    </label>
                    <div className="my-6">
                    <input {...register('image' , {required: true})} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    <button className="btn btn-neutral">Update Item</button>
                
    </form>
            </div>

        </div>
    );
};

export default UpdateItem;