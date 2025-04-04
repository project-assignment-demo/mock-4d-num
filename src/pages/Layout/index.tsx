import { Outlet, useLocation } from "react-router";
import Sidebar from "../Sidebar";
import { useSiteStore } from "../../store";
import Nav from "../Nav";
import { PropsWithChildren, useEffect, useMemo } from "react";
import { fetchIcons } from "../../api/companyIcon";
import { useQueries } from "@tanstack/react-query";
import { getResults } from "../../api/result";
import dayjs from "dayjs";
import { getSpecialDraw } from "../../api/specialDrawDate";

const useBaseInitializeRequest = () => {
  const updateCompanies = useSiteStore((state) => state.upateCompanies);
  const selectedDate = useSiteStore((state) => state.selectedDate);

  const updateResults = useSiteStore((state) => state.updateResults);
  const companies = useSiteStore((state) => state.companies);
  const sourceResults = useSiteStore((state) => state.sourceResults);
  const specialDrawResults = useSiteStore((state) => state.sourceResults);

  const updateSpecialDrawResults = useSiteStore(
    (state) => state.updateSpecialDrawResults
  );

  const queries = useQueries({
    queries: [
      { queryKey: ["site-logo"], queryFn: fetchIcons },
      {
        queryKey: ["results", selectedDate],
        queryFn: () => getResults(dayjs(selectedDate).format("YYYY-MM-DD")),
      },
      { queryKey: ["specialDraw"], queryFn: getSpecialDraw },
    ],
  });

  const [companiesIconResult, results, specialDraw] = queries;

  useEffect(() => {
    if (companiesIconResult.isSuccess)
      updateCompanies(companiesIconResult.data);
  }, [companiesIconResult.isSuccess, companiesIconResult.data]);

  useEffect(() => {
    if (results.isSuccess) updateResults(results.data);
  }, [results.isSuccess, results.data]);

  useEffect(() => {
    if (specialDraw.isSuccess) updateSpecialDrawResults(specialDraw.data);
  }, [specialDraw.isSuccess, specialDraw.data]);

  const isCompleted =
    companies.length && sourceResults.length && specialDrawResults.length;
  const isError =
    companiesIconResult.isError || results.isError || specialDraw.isError;

  const isPending =
    companiesIconResult.isPending || results.isPending || specialDraw.isPending;

  return {
    isPending,
    isCompleted,
    isError,
  };
};

const DataInitializer = ({ children }: PropsWithChildren) => {
  const { isCompleted, isError } = useBaseInitializeRequest();

  if (isError) return <Error />;

  if (isCompleted) return children;

  return <Loading />;
};

const Layout = () => {
  const { isCompleted, isError } = useBaseInitializeRequest();

  // const specialDrawResults = useSiteStore((state) => state.specialDrawResults);

  let Content = () => <Loading />;

  if (isError) {
    Content = () => <Error />;
  }

  if (isCompleted) {
    Content = () => <Outlet />;
  }

  return (
    <div className="flex h-screen w-full bg-[#F3F3F3]">
      {/* Sidebar */}
      <section className="hidden lg:w-[250px] lg:block h-screen">
        <Sidebar />
      </section>
      <DataInitializer>
        <main className="flex flex-col h-full w-full">
          <div className="w-full bg-[#F3F3F3]">
            <Nav />
          </div>

          <div className="overflow-scroll scrollbar-hidden max-w-[1440px]">
            <div className="flex">
              <div className="flex-grow">
                <Outlet />

                {/* <Content /> */}
              </div>
              {/* <div>
              {specialDrawResults.length && (
                <div>
                  {specialDrawResults.map((r) => (
                    <p>{r}</p>
                  ))}
                </div>
              )}
            </div> */}
            </div>
          </div>
        </main>
      </DataInitializer>
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
