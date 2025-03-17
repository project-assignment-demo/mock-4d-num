import { Outlet, useLocation } from "react-router";
import Sidebar from "../Sidebar";
import { useSettingStore } from "../../store";
import Nav from "../Nav";
import { useEffect } from "react";
import { fetchIcons } from "../../api/companyIcon";
import { useQuery } from "@tanstack/react-query";

const Layout = () => {
  const location = useLocation();
  const updateCompanies = useSettingStore((state) => state.upateCompanies);

  const { isPending, error, data: icons } = useQuery({
    queryKey: ["site-logo"],
    queryFn:fetchIcons,
  });

  useEffect(() => {
    
    if (icons) updateCompanies({currentPath: location.pathname, icons,});
  }, [icons, updateCompanies, location.pathname]);

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>{`An error has occurred: ${error.message}`}</div>;

  return (
    <div className="flex h-screen w-full bg-[#F3F3F3]">
      {/* Sidebar */}
      <section className="hidden lg:w-[250px] lg:block h-screen">
        <Sidebar />
      </section>

      <main className="flex flex-col h-full w-full">
        <div className="w-full bg-[#F3F3F3]">
          <Nav/>
        </div>

      
        <div className="overflow-scroll scrollbar-hidden max-w-[1440px]">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

/* Drawer Component */
const Drawer: React.FC<React.PropsWithChildren> = ({ children }) => {
  const isOpen = useSettingStore((state) => state.openDrawer);
  const setIsOpen = useSettingStore((state) => state.updateDrawer);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-25 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[50%] shadow-lg transform transition-transform duration-300 z-50
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4">
          {/* Close Icon */}
        </button>

        {children}
      </div>
    </>
  );
};

export default Layout;