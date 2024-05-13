
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {

    const axiosPublic = useAxiosPublic();

    const { data: menu = [], isPending: loading , refetch} = useQuery({
        queryKey: ["menu"],
        queryFn: async () => {
            const res = await axiosPublic.get('/menu');
            return res.data;
        }
            
        
    })




    // const [menu, setMenu] = useState([]);
    // const [loading, setloading] = useState(true)
    // useEffect(() => {
    //     fetch(`http://localhost:5000/menu`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data)
    //             setloading(false)
    //         })
    // }, [])
    return [menu, loading, refetch]
    
}
export default useMenu;