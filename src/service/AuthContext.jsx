import { createContext } from "react";
import { isLoggedIn } from "./Apicall";

/**
 * Authentication/Authorization context for managing authenticated/authorized users
 */
const AuthContext = createContext({
  isAuthenticated: isLoggedIn(),
  dispatch: () => {},
});

export default AuthContext;
