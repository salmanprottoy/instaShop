const initState = {
    products: [],
    totalPrice: 0,
    totalQuantities: 0
}
const CartReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const { product, quantity } = action.payload;
            //  console.log("Id is given",product.id);
            const check = state.products.find(product => product.id === action.payload.product.id);
            if (check) {
                return state;
            }
            else {
                const Tprice = state.totalPrice + product.discountPrice * quantity;
                const Tquantities = state.totalQuantities + quantity;
                product.quantity = quantity;
                return {
                    ...state,products:[...state.products,product],totalPrice:Tprice,totalQuantities:Tquantities
                }
            }
        default:
            return state;
    }    
}
export default CartReducer;