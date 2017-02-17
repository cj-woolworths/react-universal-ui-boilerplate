import * as Actions from '../actions';

export function increaseCounter (volume = 1) {
	return { type: Actions.IncreaseCounter, volume };
}

export function changeLocalize (lang = 'eng') {
	return { type: Actions.ChangeAppLocalize, lang };
}

export function setLoadingStatus (id, flag) {
	return { type: Actions.SetLoadingStatus, id, flag };
}