/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/userContext";

const UserProtectWrapper = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useContext(UserDataContext);
  let isToken = localStorage.getItem("uberToken");
  if (!user || !isToken) {
    navigate("/login");
  }
  return <>{children}</>;
};

export default UserProtectWrapper;
