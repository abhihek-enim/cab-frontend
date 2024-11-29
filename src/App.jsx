import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import UserLogin from "./pages/UserLogin.jsx";
import UserSignup from "./pages/UserSignup.jsx";
import CaptainSignup from "./pages/CaptainSignup.jsx";
import CaptainLogin from "./pages/CaptainLogin.jsx";
import Start from "./pages/Start.jsx";
import UserProtectWrapper from "./components/UserProtectWrapper.jsx";
import CaptainHome from "./pages/CaptainHome.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route
          path="/home"
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/captain-home"
          element={
            <UserProtectWrapper>
              <CaptainHome />
            </UserProtectWrapper>
          }
        />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
      </Routes>
    </>
  );
};

export default App;
