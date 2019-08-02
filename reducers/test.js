const initialStore = {
  title: 'mangoTV',
  changed: false
}

export const CHANGE_TITLE_REQUEST = 'CHANGE_TITLE_REQUEST';
export const CHANGE_TITLE_SUCCESS = 'CHANGE_TITLE_SUCCESS';
export const CHANGE_TITLE_FAIRURE = 'CHANGE_TITLE_FAIRURE';

const reducer = (store = initialStore, action) => {
  switch(action.type){
    case CHANGE_TITLE_REQUEST:
      return {
        ...store
      }
    case CHANGE_TITLE_SUCCESS:
      return {
        ...store,
        title: action.title,
        changed: action.changed
      }
    case CHANGE_TITLE_FAIRURE:
      return {
        ...store,
      }
    default:
      return {
        ...store
      }
  }
}

export default reducer;