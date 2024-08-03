import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const initialstate = {
  // userdata: {sessionid: '', emp_id: ''},
  userdata: {
    azp: '',
    scope: '',
    sid: '',
    email_verified: false,
    name: '',
    preferred_username: '',
    given_name: '',
    display_name: '',
    family_name: '',
    picture: '',
    email: '',
    uuid: '',
    tenant_id: '',
    status: '',
    realm: '',
    last_name: '',
    first_name: '',
  },
  keyclocktoken: '',
  tenant: '',
  realm: '',
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: initialstate,
  reducers: {
    setUserData: (state: typeof initialstate, action: PayloadAction<any>) => {
      state.userdata = action.payload;
    },
    setKeycloakToken: (
      state: typeof initialstate,
      action: PayloadAction<any>,
    ) => {
      state.keyclocktoken = action.payload;
    },
    setTenant: (state: typeof initialstate, action: PayloadAction<string>) => {
      state.tenant = action.payload;
    },
    setRealm: (state: typeof initialstate, action: PayloadAction<string>) => {
      state.realm = action.payload;
    },
  },
});

export const {setUserData, setKeycloakToken, setTenant, setRealm} =
  AuthSlice.actions;
export default AuthSlice.reducer;
