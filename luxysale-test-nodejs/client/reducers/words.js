import * as types from '../../constants/ActionTypes';
const initialState = {
	word:"",
	words : [],
	phrases:""
};
export default function words(state=initialState,action){
	switch(action.type){
		case types.SAVE_WORD:
			console.log(action);
			var words = [];
			return {
				word:"",
				words,
				phrases:""
			};
		case types.SHOW_WORDS:
			var words = [];
			return {
				word:"",
				words,
				phrases:""
			}

		case types.GENERATE_PHRASES:
			return {
				word:"",
				words,
				phrases:""
			}
		default:
			return state; 
	}
}