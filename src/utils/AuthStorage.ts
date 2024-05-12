import { setUserFromStorage } from '@/redux/features/auth-slice';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
interface TokenType {
  accessToken: string;
  refreshToken: string;
}

export const storeAuth = function (token: TokenType) {
  try {
    localStorage.setItem('authTokens', JSON.stringify(token));
  } catch (e) {}
};

export const retrieveAuth = function () {
  try {
    const dispatch = useDispatch<AppDispatch>();
    let data  = localStorage.getItem('authTokens');
    const  userData : any  = jwtDecode(data!)
    const user = {
      id : userData.sub,
      userName :userData.username
    }

    dispatch(setUserFromStorage(user));
    
    console.log('retreived data');
  } catch (e) {
    return null;
  }
};
