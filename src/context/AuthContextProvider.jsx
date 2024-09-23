"use client";
import { loginUserAPI } from "@/services/auth/login";
import { signupUserAPI } from "@/services/auth/signup";
import toast from "react-hot-toast";
import { createContext, useContext, useEffect, useReducer } from "react";
import { getUserAPI } from "@/services/auth/getUser";

const AuthContext = createContext();
const initialState = {
  user: null,
  isLoading: false,
  isAuthenticated: false,
  error: null,
};

// AUTH REDUCER
const authReducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "signup":
      return { ...state, isLoading: false, user: action.payload, isAuthenticated: true };
    case "login":
      return { ...state, isLoading: false, user: action.payload, isAuthenticated: true };
    case "user/loaded":
      return { ...state, isLoading: false, user: action.payload, isAuthenticated: true };
    case "error":
      return { ...state, isLoading: false, error: action.payload };
    default:
      return { ...state };
  }
};

const AuthContextProvider = ({ children }) => {
  const [{ user, isLoading, isAuthenticated }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  //   SIGNUP USER
  const signupUser = async (formData) => {
    dispatch({ type: "loading" });
    try {
      const { data, statusCode } = await signupUserAPI(formData);
      if (statusCode === 200) {
        dispatch({ type: "signup", payload: data.user });
        toast.success(data?.message);
      }
    } catch (err) {
      dispatch({ type: "error", payload: err.response?.data?.message });
      toast.error(err.response?.data?.message);
    }
  };

  //   LOGIN USER
  const loginUser = async (userData) => {
    dispatch({ type: "loading" });
    try {
      const { data, statusCode } = await loginUserAPI(userData);
      if (statusCode === 200) {
        dispatch({ type: "login", payload: data.user });
        toast.success(data?.message);
      }
    } catch (err) {
      dispatch({ type: "error", payload: err.response?.data?.message });
      toast.error(err.response?.data?.message);
    }
  };

  //   LOGIN USER
  const getUser = async () => {
    dispatch({ type: "loading" });
    try {
      const { user } = await getUserAPI();
      dispatch({ type: "user/loaded", payload: user });
      console.log("firstLoad data ==============> ", user);
    } catch (err) {
      dispatch({ type: "error", payload: err.response?.data?.message });
      toast.error(err.response?.data?.message);
    }
  };

  //  FETCH USER DATA IN FIRST LOAD
  useEffect(() => {
    async function fetchUserData() {
      await getUser();
    }

    fetchUserData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isLoading, isAuthenticated, signupUser, loginUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("not found auth context...");

  return context;
};

export { AuthContextProvider };
export default useAuth;
