// import { ADD_TO_CART } from '../actions/cartActions'


const initState = {
    items:[{
        id:1,
        heading : "HOT VACANCY",
        price : 1680,
        detail : "Advanced Job Posting",
        products:[{items: "Hot Vacancy Job Posting",price:9900},{items:"Host Vacancy Job Posting",price:1650},{items:"7 days RESDEX",price:2500}],
        quantity:0
    },
    {
        id:2,
       heading : "CLASSIFIED",
       price : 800,
       detail : "Basic Job Posting",
       quantity:0
   },
   {   
       id:3,
       heading : "JP Lite",
       price : 250,
       detail : "Job Posting Lite",
       quantity:0
   }],
    username:"Symbiosis pvt Ltd",
    userId : "info@symbiosis.com",
    addedItems:[],
    total: 0,
    quantity:0,
    isLoggedIn : true,
    cart : false,
    lgnreg : "login"
}
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
