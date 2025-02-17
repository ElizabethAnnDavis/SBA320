import apiData from '../data/apiData';

function imageReducer(state, { type }){
    switch (type) {
        case 'next':
            console.log((state.i + 1) % apiData.length);
            return { i: (state.i + 1) % apiData.length };
        case 'previous':
            return { i: (state.i - 1 + apiData.length) % apiData.length };
        default:
            return state;
    };
}

export default {imageReducer};