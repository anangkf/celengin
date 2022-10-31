import Cookies from "js-cookie";

const Auth ={
  isAuthorized(){
    if(Cookies.get('id'))return true;
    return null;
  },
  getUserId(){
    return Cookies.get('id')
  },
  /**
   * 
   * @param {*} navigate a function used to navigate(useNavigate())
   */
  logOut(navigate){
    Cookies.set('id');
    Cookies.set('firstname');
    Cookies.set('lastname');
    Cookies.set('username');
    navigate('/');
  },
  getUserDetails(){
    if(this.isAuthorized()){
      const firstname = Cookies.get('firstname');
      const lastname = Cookies.get('lastname');
      const username = Cookies.get('username');
      
      return {firstname, lastname, username}
    }
  },
  /**
   * 
   * @param {*} result is the status either user was authenticated or not
   * @param {*} userData user data to be stored in cookie
   */
  storeUserInfoToCookie(result, userData){
    const {id, firstname, lastname, username} = userData
    if(result){
      Cookies.set('id', id, {expires: 3})
      Cookies.set('firstname', firstname, {expires: 3})
      Cookies.set('lastname', lastname, {expires: 3})
      Cookies.set('username', username, {expires: 3})
      return userData;
    }
  },
}

export default Auth;