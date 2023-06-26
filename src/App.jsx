import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BasicExample from './Register/RegisterReactBoost';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './LayOut/Main';
import Login from './LogIn/Login';
import Register from './Register/RegisterReactBoost';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main>0</Main>,
    children: [
      {
        path: '/',
        element: <Register></Register>
      },
      {
        path: '/register',
        element: <Register></Register>
      },

      {
        path: '/login',
        element: <Login></Login>
      }

    ]
  }
]);
const App = () => {

  return (
    <div>

      <RouterProvider router={router}></RouterProvider>
    </div>
  )

}




export default App;