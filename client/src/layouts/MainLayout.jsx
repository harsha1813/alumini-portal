import { Outlet } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

function MainLayout() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}

export default MainLayout;