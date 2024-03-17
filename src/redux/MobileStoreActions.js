export const buyPhone = (name, price) => {
    return {
        type: 'Buy_Phone',
        name: name,
        price: price
    }
}