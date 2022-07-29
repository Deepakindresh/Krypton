
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
    }
}

export default reducer;