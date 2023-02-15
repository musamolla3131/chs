import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import Login from './components/login/Login';
import app from './Firebase/firebase.init';
import { RouterProvider } from 'react-router-dom';
import Router from './components/Routes/Public/Router';


const auth = getAuth(app);


function App() {

  const provider = new GoogleAuthProvider();

  const handleGoogleSingIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.log('error:', error);
      })
  }



  return (
    <div>
      <RouterProvider router={Router} />

      <Login handleGoogleSingIn={handleGoogleSingIn} />

    </div>
  );
}

export default App;
