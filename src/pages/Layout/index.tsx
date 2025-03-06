import { Outlet } from "react-router";
import Sidebar from "../Sidebar";
import ChangeLocaleDropDown from "../components/LocaleDropDownButton";
import { useSettingStore } from "../../store";
import { MdMenu, MdRefresh } from 'react-icons/md'
import CustomDatePicker from "../components/LotteryDatePicker";
import ThemeModeSwitcher from "../components/ThemeModeSwitch";

const Header = () => {

    const openDrawer = useSettingStore(state => state.updateDrawer);

    return (
        <nav className="flex justify-between gap-2 px-2 py-4">
            <div className="block sm:hidden" onClick={() => openDrawer(true)}>
                <MdMenu className="text-[20px]" />
            </div>
            <div className="w-[300px] bg-white drop-shadow-md rounded-xl flex items-center justify-between" >
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>
            <div>
                <CustomDatePicker />
            </div>
            <div className="bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center drop-shadow-md">
                <MdRefresh className="text-[20px]" />
            </div>
            <div className="hidden sm:block">
                <ChangeLocaleDropDown />
            </div>

        </nav>
    );
}

function Drawer(props: React.PropsWithChildren) {

    const isOpen = useSettingStore(state => state.openDrawer);
    const setIsOpen = useSettingStore(state => state.updateDrawer);
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
}

const Layout = () => (

    <div className="flex h-screen w-screen bg-gray-200">
    {/* sidebar */}
        <Drawer>
            <Sidebar />
        </Drawer>
        <section className="w-[0px] sm:w-[250px] h-screen">
            <Sidebar />
        </section>
        <main className="flex-auto h-full w-full overflow-y-scroll">
            <Header />
            <Outlet />
        </main>
    </div>

    // <div className="h-screen w-screen flex justify-center items-center flex-col">
    //     <ThemeModeSwitcher />
    // </div>
);

export default Layout;