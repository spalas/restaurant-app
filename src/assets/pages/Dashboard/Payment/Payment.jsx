import SectionTitle from "../../../../compoments/SectionTitle/SectionTitle";
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from "./CheckOutForm";
import useCart from "../../../../hooks/useCart";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_HOSTING_KEY2);



const Payment = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <div>
            <SectionTitle heading="Payment" subheading="Please pay your amount"></SectionTitle>
            <p className="m-2 text-rose-600">Total payment {totalPrice }</p>
            <div>
                
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;