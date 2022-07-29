
export const initialState = {
    currProduct: null,
    user: null,
    basket: [],
};

 

const reducer = (state,action) => {
    switch(action.type){
                case "SET_USER":
                    return {
                        ...state,
                        user: action.user
                    }

                case "ADD_TO_BASKET":
                    return {
                        ...state,
                        basket: [...state.basket, action.item]
                    };

                case "ADD_PRODUCTS":
                    return {
                        ...state,
                        currProduct: action.currProduct
                    };

                    case "REMOVE_FROM_BASKET":
                        let newBasket = [...state.basket];
                        const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            
                        if(index >= 0){
                            newBasket.splice(index,1);
                        }else{
                            console.warn("Cannot find id");
                        }
            
                        return {...state, basket: newBasket};
    }
}

export default reducer;