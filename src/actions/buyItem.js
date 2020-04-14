export const BUY_ITEM = 'BUY_ITEM';    

export const buyItem = feature => {
    console.log('action creator: buyitem: function test', feature) // confirmed working
    return { 
        type: BUY_ITEM,
        payload: feature
    }
}