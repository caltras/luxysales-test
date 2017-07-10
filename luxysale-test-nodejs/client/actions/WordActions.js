import * as types from '../constants/ActionTypes';

export function saveWord(word){
	console.log("Salvando");
	return {
		type: types.SAVE_WORD,
		word
	};
}
export function showWords(){
	return {
		type: types.SHOW_WORDS
	};
}
export function generatePhrases(){
	return {
		type: types.GENERATE_PHRASES
	}
}