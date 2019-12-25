// 액션 생성자
const CHANGE_ME = 'me/CHANGE_ME';

// 액션 생성 함수
export const changeMe = (diff: Me) => ({type: CHANGE_ME, payload: diff});

type MeAction = 
  | ReturnType<typeof changeMe>;

export type Me = {
  id: string;
  nickname: string;
  email: string;
}

type MeState = {
  me: Me
}

const initialState: MeState = {
  me: {
    id: 'devho813',
    nickname: '테스트닉네임',
    email: 'devho813@gmail.com'
  }
}

// 리듀서
function me(state: MeState = initialState, action: MeAction): MeState {
  switch(action.type){
    case CHANGE_ME:
      return {
        ...state,
        me: action.payload
      }
      break;
    default: 
      return state;
  }
}

export default me;