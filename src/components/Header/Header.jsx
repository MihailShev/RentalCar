import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <>
      <Navigation />

      <Outlet />
    </>
  );
}
