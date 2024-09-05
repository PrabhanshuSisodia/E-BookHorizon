import { Navigate } from 'react-router-dom';

// here children is cartpage from allroutes
const ProtectedRoutes = ({children}) => {
    const token = JSON.parse(sessionStorage.getItem("token"));

  return token ? children :<Navigate to="/login"/>
}

export { ProtectedRoutes}
