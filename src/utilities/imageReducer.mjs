import apiData from '../data/apiData';

function imageReducer(state, { type }){
    switch (type) {
        case 'next':
            return { index: (state.index + 1) % apiData.length };
        case 'previous':
            return { index: (state.index - 1 + apiData.length) % apiData.length };
        default:
            return state;
    };
}

export {imageReducer};