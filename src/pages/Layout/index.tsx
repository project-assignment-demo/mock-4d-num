import { Outlet, useLocation } from "react-router";
import Sidebar from "../Sidebar";
import { useSiteStore } from "../../store";
import Nav from "../Nav";
import { useEffect } from "react";
import { fetchIcons } from "../../api/companyIcon";
import { useQueries, useQuery } from "@tanstack/react-query";
import { getResults } from "../../api/result";
import dayjs from "dayjs";

const Layout = () => {
  const location = useLocation();
  const updateCompanies = useSiteStore((state) => state.upateCompanies);
  const selectedDate = useSiteStore((state) => state.selectedDate);

  const updateResults = useSiteStore((state) => state.updateResults);

  // fetch companies icon
  // fetch results

  const [companiesIconResult, results] = useQueries({
    queries: [
      { queryKey: ["site-logo"], queryFn: fetchIcons },
      {
        queryKey: ["results", selectedDate],
        queryFn: () => getResults(dayjs(selectedDate).format("YYYY-MM-DD")),
      },
    ],
  });

  useEffect(() => {
    if (companiesIconResult.isSuccess)
      updateCompanies(companiesIconResult.data);
  }, [
    companiesIconResult.isSuccess,
    companiesIconResult.data,
    updateCompanies,
  ]);

  useEffect(() => {
    if (results.isSuccess) updateResults(results.data);
  }, [results.isSuccess, results.data, updateResults]);

  let Content = () => <Outlet />;

  if (companiesIconResult.isPending || results.isPending) {
    Content = () => <Loading />;
  }

  if (companiesIconResult.isError || companiesIconResult.isError) {
    Content = () => <Error />;
  }

  // const {
  //   isPending,
  //   error,
  //   data: icons,
  // } = useQuery({
  //   queryKey: ["site-logo"],
  //   queryFn: fetchIcons,
  // });

  // useEffect(() => {
  //   if (icons) updateCompanies({ currentPath: location.pathname, icons });
  // }, [icons, updateCompanies, location.pathname]);

  // const {
  //   data: results,
  // } = useQuery({
  //   queryKey: ["results", selectedDate],
  //   queryFn: () => getResults(dayjs(selectedDate).format("YYYY-MM-DD")),
  // });

  // console.log(results);

  // useEffect(() => {
  //   if (results) {
  //     updateResults(results);
  //   }
  // }, [selectedDate, results]);

  return (
    <div className="flex h-screen w-full bg-[#F3F3F3]">
      {/* Sidebar */}
      <section className="hidden lg:w-[250px] lg:block h-screen">
        <Sidebar />
      </section>

      <main className="flex flex-col h-full w-full">
        <div className="w-full bg-[#F3F3F3]">
          <Nav />
        </div>

        <div className="overflow-scroll scrollbar-hidden max-w-[1440px]">
          <Content />
        </div>
      </main>
    </div>
  );
};

const Loading = () => {
  return <div>Loading...</div>;
};
const Error = () => {
  return <div>Error !!</div>;
};

/* Drawer Component */
// const Drawer: React.FC<React.PropsWithChildren> = ({ children }) => {
//   const isOpen = useSettingStore((state) => state.openDrawer);
//   const setIsOpen = useSettingStore((state) => state.updateDrawer);

//   return (
//     <>
//       {/* Overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black opacity-25 z-40"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       {/* Drawer */}
//       <div
//         className={`fixed top-0 left-0 h-full w-[50%] shadow-lg transform transition-transform duration-300 z-50
//           ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
//       >
//         <button
//           onClick={() => setIsOpen(false)}
//           className="absolute top-4 right-4"
//         >
//           {/* Close Icon */}
//         </button>

//         {children}
//       </div>
//     </>
//   );
// };

export default Layout;
