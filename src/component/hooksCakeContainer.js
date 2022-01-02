import React, {useState} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import buyCake from "../Redux/Cakes/cakeAction";

const HooksCakeContaoiner = () => {
  const [number, setNumber] = useState(1)
  const numOfCakes =  useSelector(state => state.cake.numOfCakes )
  const dispatch = useDispatch()

    return ( 
        <div>
            <h2>Num of Cakes - {numOfCakes}</h2>
            <input type='text' value={number} onChange={e =>setNumber(e.target.value)}/>
            <button onClick={()=> dispatch(buyCake(number))}>Buy Cake</button>
        </div>
     );
}
 
export default HooksCakeContaoiner;