 import data from  "../../config.json";


const initState = data;
const cartReducer= (state = initState,action)=>{
    switch(action.type)
    {
     case 'ADD_TO_CART':
    {
        let addedItem = state.items.find(item=> item.id === action.id);
        let existed_item= state.addedItems.find(item=> action.id === item.id);
        if(existed_item)
         { 
             return{
                ...state,
                 total: state.total, 
                  }
        }
         else{
            addedItem.quantity = action.quantity;
            //calculating the total
            let newTotal = state.total + action.total 
            
            return{
                ...state,
                addedItems: [...state.addedItems,addedItem],
                total : newTotal,
                quantity : state.quantity + action.quantity
            }
            
        }
    }
    case 'LOGGED_IN':
        {
            return{
                ...state,
                isLoggedIn : action.value
            } 
        }
    case 'CART_STATE':
        {
            return{
                ...state,
                cart : action.value
            } 
        }
        case 'CHANGE_COMPONENT':
        {
            return{
                ...state,
                lgnReg : action.value
            } 
        }
    

   default :
        return state
     
}
}
export default cartReducer;
