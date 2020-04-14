const REMOVE_FEATURE = 'REMOVE_FEATURE';    

export const removeFeature = id => {
    return {
        type: REMOVE_FEATURE,
        payload: id
    }
}