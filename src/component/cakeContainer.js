import React from "react";
import buyCake from "../Redux/Cakes/cakeAction";
import { connect } from "react-redux";


const CakeContainer = (props) => {
    return ( 
        <div>
            <h2>Number of cakes - {props.numOfCakes} </h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
     );
}


const mapStateToPros = state =>{
    return{
     numOfCakes: state.cake.numOfCakes   
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        buyCake: ()=>{
            dispatch(buyCake());
        }
    }
}
 
export default connect(mapStateToPros, mapDispatchToProps) (CakeContainer);