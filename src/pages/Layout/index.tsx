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
    <div className="flex h-screen w-screen bg-gray-200">
      {/* sidebar */}
      <Drawer>
        <Sidebar />
      </Drawer>
      <section className="w-[0px] sm:w-[250px] h-screen">
        <Sidebar />
      </section>
      <main className="flex-auto h-full w-full overflow-y-scroll">
        <Nav />
        <Outlet />
      </main>
    </div>

    // <div className="h-screen w-screen flex justify-center items-center flex-col">
    //     <ThemeModeSwitcher />
    // </div>
  );
};

export default Layout;
