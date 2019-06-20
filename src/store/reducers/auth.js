export const Types = {
  SIGN_IN: 'auth/SIGN_IN',
  SIGN_OUT: 'auth/SIGN_OUT',
  SIGN_IN_SUCCESS: 'auth/SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE: 'auth/SIGN_IN_FAILURE',
};

const initialState = {
  user: {
      name: 'Esthefanie Lanzas',
      type: 'ADMIN', // ADMIN | MANAGER | COMMON,
      photo: 'https://scontent.fplu4-1.fna.fbcdn.net/v/t1.0-9/43036358_10212949548320038_8904502966036201472_n.jpg?_nc_cat=100&_nc_ht=scontent.fplu4-1.fna&oh=5837e81afd02fe4a0443b0353dc8dc0d&oe=5D4EEA06',
      address: 'Rua Zero n 500 - Savassi BH/MG',
      phone: '(31) 9999-9999'
  },
  loading: false,
  error: null,
  allowed: false,
  token: null,
  uid: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
      case Types.SIGN_IN:
        return { ...state, loading: true };
      case Types.SIGN_OUT:
        return {
           ...state,
           token: null,
           allowed: false
        };
      case Types.SIGN_IN_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          allowed: true,
          token: action.payload.data.uidToken,
          uid: action.payload.data.userData.uid,
          user: {
            name: String(action.payload.data.userData.name),
            type: String(action.payload.data.userData.level),
            photo: 'http://i.pravatar.cc/300',
            address: 'Rua Zero n 500 - Savassi BH/MG',
            phone: String(action.payload.data.userData.phone),
            level: String(action.payload.data.userData.level),
          }
        };
      case Types.SIGN_IN_FAILURE:
        return { ...state, loading: false, error: true };
      default:
        return state;
  }
}

export const Creators = {
signIn: (email, password) => ({
  type: Types.SIGN_IN,
  payload: { email, password }
}),
signOut: () => ({
  type: Types.SIGN_OUT,
  payload: {}
}),
signInSuccess: (data) => ({
  type: Types.SIGN_IN_SUCCESS,
  payload: { data }
}),
signInFailure: () => ({
  type: Types.SIGN_IN_FAILURE,
  payload: {}
}),
}
