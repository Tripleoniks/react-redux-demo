import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import buyIceCream from "../Redux/iceCream/iceCreamAction";

const IceCreamContainer = () => {
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)
    const dispatch = useDispatch()


    return ( 
        <div>
            <h2> Number of Ice Cream - {numOfIceCream}</h2>
            <button onClick={()=> dispatch(buyIceCream())}>Buy IceCream</button>
        </div>
     );
}
 
export default IceCreamContainer ;