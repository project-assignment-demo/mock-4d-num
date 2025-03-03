import { Outlet } from "react-router";
import Sidebar from "../Sidebar";
import ChangeLocaleDropDown from "../components/ChangeLocaleDropDown";

const Header = () => {
    return (
        <nav className="flex justify-between px-2 py-4">
            <div>三</div>
            <div>DAMACAI</div>
            <div>Date Picker</div>
            <div>O</div>
            <ChangeLocaleDropDown className="block md:hidden"/>
        </nav>
    );
}

const Layout = () => (

    <div className="flex h-screen">
        <section className="flex-1 bg-red-400">
            <Sidebar/>
        </section>
        <main className="flex-4 bg-blue-500">
            <Header />
            <Outlet />
        </main>
    </div> 
  );

  export default Layout;