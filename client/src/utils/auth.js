// use this to decode a token and get the user's information out of it
import decode from 'jwt-decode';

// const secret = 'mysecretssshhhhhhh';
// const expiration = '2h';

// module.exports = {
//   signToken: function ({ email, name, _id }) {
//     const payload = { email, name, _id };
//     return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
//   },
// };



// create a new class to instantiate for a user
class AuthService {
  // get user data
  getProfile() {
    return decode(this.getToken());
  }

  // check if user's logged in
  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); // handwaiving here
  }

  // check if token is expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // Retrieves the user token from localStorage
    // ADJUST TOKEN KEY HERE
    return localStorage.getItem('id_token');
  }

  login(idtoken) {
    // Saves user token to localStorage
    // ADJUST TOKEN KEY HERE
    localStorage.setItem('id_token', idtoken);
    window.location.assign('/');
  }

  logout() {
    // Clear user token and profile data from localStorage
    // ADJUST TOKEN KEY HERE
    localStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.assign('/');
  }
}

export default new AuthService();
