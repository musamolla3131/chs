import './App.css';
import { RouterProvider } from 'react-router-dom';
import Router from './components/routes/rublic/router';



function App() {
  return (
    <RouterProvider router={Router} />
  );
}

export default App;
