import { Outlet } from "react-router";
import Sidebar from "../Sidebar";
import { useSettingStore } from "../../store";
import Nav from "../Nav";

const Layout = () => {
  const Drawer = (props: React.PropsWithChildren) => {
    const isOpen = useSettingStore((state) => state.openDrawer);
    const setIsOpen = useSettingStore((state) => state.updateDrawer);
    return (
      <>
        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-[.25] z-40"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Drawer */}
        <div
          className={`fixed top-0 left-0 h-full w-[50%] shadow-lg transform transition-transform duration-300 z-50
              ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4"
          >
            {/* <X size={24} /> */}
          </button>

          {props.children}
        </div>
      </>
    );
  };

  return (
    <div className="flex h-screen w-screen bg-[#F3F3F3]">
      {/* sidebar */}
      {/* <Drawer>
        <Sidebar />
      </Drawer> */}
      <section className="hidden lg:w-[250px] lg:block h-screen">
        <Sidebar />
      </section>
      <main className="flex flex-col h-full w-full ">
        <div className=" w-full bg-[#F3F3F3]">
          <Nav />
        </div>

        <div className="overflow-scroll scrollbar-hidden">
        <Outlet />
        </div>

        {/* <div className="flex flex-row h-full w-full">
        <div className="h-full flex-grow overflow-scroll scrollbar-hidden">
           <Outlet />
        </div>
        <div className="bg-red-300 h-screen w-[250px]">
123 
        </div>
        </div> */}
      </main>
    </div>
  );
};

export default Layout;
