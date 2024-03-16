 import {useQuery} from "@tanstack/react-query"
 import  UseAxiosSecure from "./UseAxiosSecure";
import UseAuth from "./useAuth";
const UseCart = () => {
    const {user} = UseAuth()
    const axiosSecure = UseAxiosSecure()
   const {refetch, data: cart = []} = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async()=>{
        const res = await axiosSecure.get(`/carts?email=${user.email}`)
        return res.data
    }
   })

   return [cart, refetch]
};

export default UseCart;