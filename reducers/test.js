import produce from 'immer';

const initialStore = {
  title: 'MangoTV',
  changed: false
}

export const CHANGE_TITLE_REQUEST = 'CHANGE_TITLE_REQUEST';
export const CHANGE_TITLE_SUCCESS = 'CHANGE_TITLE_SUCCESS';
export const CHANGE_TITLE_FAIRURE = 'CHANGE_TITLE_FAIRURE';

const reducer = (store = initialStore, action) => {
  return produce(store, (draft) => {
    switch(action.type){
      case CHANGE_TITLE_REQUEST:
        break;
      case CHANGE_TITLE_SUCCESS:
        draft.title = action.title;
        draft.changed = action.changed;
        break;
      case CHANGE_TITLE_FAIRURE:
        break;
      default:
        break;
    }
  })
}

export default reducer;