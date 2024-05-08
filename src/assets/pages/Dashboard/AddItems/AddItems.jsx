import SectionTitle from "../../../../compoments/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form"


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
                <input {...register("name")} />
                    <select {...register("category")}
                className="select select-warning w-full max-w-xs">
                 
                <option disabled selected>Select a category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>

                </select>
                <input type="submit" />
    </form>
            </div>
        </div>
    );
};

export default AddItems;