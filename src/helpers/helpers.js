import PostService from "../API/PostService";

export const addPurchase = async (
    dispatch,
    addPurchaseActionCreator,
    setProductActionCreator,
    purchase,
    id,
    data,
    setCartActionCreator,
    product,
    selector
) => {
    const response = await PostService.putInStockById(id, data)
    dispatch(addPurchaseActionCreator(purchase))
    dispatch(setProductActionCreator())
    dispatch(setCartActionCreator(product))
}
