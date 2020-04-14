const BUY_ITEM = 'BUY-ITEM';    

export const buyItem = id => {
    return {
        type: BUY_ITEM,
        payload: id
    }
}