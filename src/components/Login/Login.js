import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './FirebaseConfig';
import icon from '../../images/google-icon.png'
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';



const Login = () => {
    const [loggedInUser, setLoggedInUser] =useContext(UserContext);
    const history = useHistory()
    const location =useLocation()

    const { from } = location.state || { from: { pathname: "/" } };
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig)
        
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
          const { displayName, email } = result.user;
          const signedInUser = { name: displayName, email }
          setLoggedInUser(signedInUser);
          history.replace(from)
        //   storeAuthToken();
        }).catch(function (error) {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
      }

      
//   const storeAuthToken = () => {
//     firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
//       .then(function (idToken) {
//         sessionStorage.setItem('token', idToken);
//         history.replace(from);
//       }).catch(function (error) {
//         // Handle error
//       });
//   }
    return (
        <div className="login-page d-flex justify-content-center align-items-center container">
          <div className="mt-5 shadow p-5 w-50 h-75"  style={{ height: "100vh" }}>
            <div className="form-group">
              <label htmlFor="">User Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="" className="text-danger">Forgot your password?</label>
            </div>
            <div className="from-group mt-5">
             
              <button style={{ backgroundColor:'#251D58',color:'white'}} className="btn" onClick={handleGoogleSignIn}> <img style={{height:'30px',width:'30px',marginRight:'20px'}} src={icon} alt=""/>Google Sign in</button>
            </div>
          </div>
      </div>
    );
};

export default Login;