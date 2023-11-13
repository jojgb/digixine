import { Outlet } from "react-router-dom";
import Headbar from "../components/Navbar/Headbar";
export const PrivateRoutes = () => {
  return (
    <>
      <Headbar />
      <Outlet />
    </>
  );
};
