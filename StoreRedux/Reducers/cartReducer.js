const initialState = { cartItems: [] }

function toCart(state = initialState, action){
    let nextState
    switch (action.type) {
        case 'ADD_TO_CART':
           
            nextState = {
                ...state,
                cartItems:[...state.cartItems, action.value]
            }
            

            return nextState || state

        case 'DELETE_FROM_CART':
            if(state.cartItems.includes(action.value)){
                nextState = {
                    ...state,
                    cartItems: state.cartItems.filter((item) => item.name !== action.value.name)
                }
            }
            return nextState || state

        case 'QTY_CART_ITEM':
            if(state.cartItems.length !== 0){
                state.cartItems.map((element, index) => {
                    if(element.name === action.value.name){
                        
                        state.cartItems[index].quantity++
                        
                    }
                })
            }
                
                
                
            return nextState ||  state
        default:
            return state
    }
}

export default toCart;