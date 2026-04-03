import { useLocation } from "react-router";
import lightLogo from "/assets/logo.png";
import darkLogo from "/assets/dark-logo.png";
const Logo = () => {
  const location = useLocation();
  const logo = location.pathname !== "/portfolio" ? lightLogo : darkLogo;
  return (
    <>
      <img src={logo} alt="Logo" />
    </>
  );
};

export default Logo;
