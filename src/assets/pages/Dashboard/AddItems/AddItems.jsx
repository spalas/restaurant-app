import SectionTitle from "../../../../compoments/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form"
import { FaUtensils } from "react-icons/fa";


const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <SectionTitle heading='add an item' subheading="What's  new?"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="form-control w-full my-6">
                    <lebel className="label">
                        <span className="label-text">Recipe name*</span>
                        
                    </lebel>
                        <input type="text"
                            placeholder="Recipe name"
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
                    <select {...register("category",{required: true})}
                className="select select-warning w-full ">
                 
                <option disabled selected>Select a category</option>
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
                        <input type="number"
                            placeholder="price"
                            {...register("price", {required: true})}
                            className="input input-bordered w-full " />
                    
                    </div>
                    </div>
    
                {/* <select {...register("category")}
                className="select select-warning w-full ">
                 
                <option disabled selected>Select a category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>

                </select> */}
                    <label className="form-control">
                    <div className="label">
                        <span className="label-text">Recipe Details</span>
                        
                    </div>
                        <textarea {... register('recipe',{required: true})}
                            className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                    
                    </label>
                    <div className="my-6">
                    <input {...register('image' , {required: true})} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    <button className="btn btn-neutral">Add Item<FaUtensils></FaUtensils></button>
                
    </form>
            </div>
        </div>
    );
};

export default AddItems;