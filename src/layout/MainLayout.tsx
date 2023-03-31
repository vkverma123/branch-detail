import { Outlet } from "react-router-dom";
import Content from "./content";

const NAVBAR_HEIGHT = 64;
const SIDEBAR_WIDTH = 240;

export const MainLayout = () => {
  return (
    <Content sidebarWidth={SIDEBAR_WIDTH} navbarHeight={NAVBAR_HEIGHT}>
      <Outlet />
    </Content>
  );
};

export default MainLayout;
