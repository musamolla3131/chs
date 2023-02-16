import './App.css';
// import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import Login from './components/admin/login';
// import app from './Firebase/firebase.init';
import { RouterProvider } from 'react-router-dom';
import Router from './components/routes/rublic/router';


// const auth = getAuth(app);


function App() {

  // const provider = new GoogleAuthProvider();

  // const handleGoogleSingIn = () => {
  //   signInWithPopup(auth, provider)
  //     .then(result => {
  //       const user = result.user;
  //       console.log(user);
  //     })
  //     .catch(error => {
  //       console.log('error:', error);
  //     })
  // }



  return (
    <div>
      <RouterProvider router={Router} />

      <Login />

    </div>
  );
}

export default App;
