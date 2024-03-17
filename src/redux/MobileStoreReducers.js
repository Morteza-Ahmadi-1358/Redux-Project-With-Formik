const Initial_State = [
    {name: 'iPhone 11', price: 1100},
    {name: 'iPhone 12', price: 1200},
    {name: 'iPhone 13', price: 1300},
    {name: 'iPhone 14', price: 1400},
    {name: 'iPhone 15', price: 1500},
]
const MobileStoreReducers = (state = Initial_State, action) => {
    switch (action.type){
        case 'Buy_Phone':
            return [...state, {name: action.name, price: action.price}]
        default:
            return state
    }
}
export default MobileStoreReducers