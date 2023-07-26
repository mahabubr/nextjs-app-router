import Sidebar from "@/components/Shared/Sidebar";

export const metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
