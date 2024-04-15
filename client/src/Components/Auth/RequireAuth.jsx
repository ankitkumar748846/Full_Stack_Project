import { useSelector } from "react-redux";
import { useLocation, Outlet, Navigate } from "react-router-dom";

function RequireAuth({ allowedRoles }) {
  const { isLoggedIn, role } = useSelector((state) => state.auth);
  const location = useLocation();

  return isLoggedIn && allowedRoles.find((myRole) => myRole == role)?(
    <Outlet/>
  ): isLoggedIn ?(<Navigate to ="/denied"/>) :(<Navigate to ="/login"/>)
}

export default RequireAuth;
