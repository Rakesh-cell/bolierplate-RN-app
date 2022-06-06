import AsyncStorage from "@react-native-async-storage/async-storage";

export const Init = () => {
  return async dispatch => {
    let token = await AsyncStorage.getItem('token');
    if (token !== null) {
      console.log('token fetched');
      dispatch({
        type: 'LOGIN',
        payload: token,
      })
    }
  }
}

export const Loginuser = (mail, password) => {
  return async dispatch => {
    let token = null;
    if (mail === 'Testuser@gmail.com' && password == '12341234') {
      token = mail + password;
      // here we can use login api to get token and then store it
      await AsyncStorage.setItem('token', token);
      console.log('token stored');
    }
    dispatch({
      type: 'LOGIN',
      payload: token,
    })
  }
}



export const Logout = () => {
  return async dispatch => {
    await AsyncStorage.clear();
    dispatch({
      type: 'LOGOUT'
    })
  }
}