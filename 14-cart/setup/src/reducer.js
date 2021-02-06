const CLEAR_CART="CLEAR_CART";
const REMOVE_ITEM="REMOVE_ITEM"
const INCREASE= "INCREASE";
const DECREASE="DECREASE";
const reducer=(state,action)=>{
    switch(action.type)
    {
        default:return state;
        case "LOADING":
            return {...state,loading:true};
        case "DISPLAY":
            return {...state,cart:action.cart,loading:false};
        case CLEAR_CART:
         return {...state,cart:[],};

         case REMOVE_ITEM:
                 return {...state,cart:state.cart.filter((item)=>item.id!==action.id)};
        
        case "AMOUNT":
        {   const tempCart=state.cart.map((item)=>{
                if(item.id===action.id)
                { 
                    const add=action.change?1:-1;
                    return {...item, amount:item.amount+ add }
                }
                return item;
            }).filter((item)=>item.amount>0);
            return {...state,cart:tempCart};
        }
        // case DECREASE:
        //     {   const tempCart=state.cart.map((item)=>{
        //         if(item.id===action.id)
        //         {  
        //             return {...item, amount:item.amount-1}
        //         }
        //         return item;
        //     }).filter((item)=>item.amount>0);
        //         return {...state,cart:tempCart};
        //     }

        case "CHANGE_STATE":{
//              const newAmount= state.cart.reduce((acc,curr)=>{
//     acc+=curr.amount;
//     return acc},0);

//   const newTotal=state.cart.reduce((acc,curr)=>{
//     acc+=curr.price*curr.amount;
//     return acc},0);

     let {amount,total}= state.cart.reduce((acc,curr)=>{
    const {amount,price}=curr;
    acc.amount+=amount;
    acc.total+=price*amount;
    return acc},{total:0,amount:0});
        total=parseFloat(total.toFixed(2))
    return {...state,amount,total};
            
        }

    return state;
        }

}
export default reducer;