import { JSX, ComponentType } from "react";
import Dashboard from "../pages/Dashboard";
import Jackpot from "../pages/Jackpot";
import SpecialDate from "../pages/SpecialDate";
import NumberAnalysis from "../pages/NumberAnalysis";
import SpinMyLuck from "../pages/SpinMyLuck";
import Hot4DNumber from "../pages/Hot4DNumber";
import LuckyBook from "../pages/LuckyBook";
import LuckyBookCategoryList from "../pages/LuckyBook/LuckyBookCategoryList";
import LuckyBookSearchResult from "../pages/LuckyBook/LuckBookSearchResult";
import NotFound from "../pages/NotFound";
import Layout from "../pages/Layout";

import { BrowserRouter, Route, Routes, useLocation } from "react-router";

interface RoutesType {
  path: string;
  name: string;
  component: ComponentType;
  children?: RoutesType[];
  setDefaultHome?: boolean;
  params?: string[];
  query?: string[];
}

const ROUTES: Record<string, RoutesType> = {
  HOME: {
    path: "/",
    name: "Home",
    component: Layout, // Wrap Layout around all nested routes
    children: [
      { path: "", name: "Dashboard", component: Dashboard },
      { path: "/jackpot", name: "Jackpot", component: Jackpot },
      { path: "/special-date", name: "SpecialDate", component: SpecialDate },
      {
        path: "/number-analysis",
        name: "/NumberAnalysis",
        component: NumberAnalysis,
      },
      { path: "/spin-my-luck", name: "SpinMyLuck", component: SpinMyLuck },
      { path: "/hot-dddd-num", name: "Hot4DNumber", component: Hot4DNumber },
      { path: "/lucky-book", name: "LuckyBook", component: LuckyBook },
      {
        path: "/lucky-book-category-list",
        name: "LuckyBookCategoryList",
        component: LuckyBookCategoryList,
        params: ["id"],
      },
      {
        path: "/lucky-book-search-result",
        name: "LuckyBookSearchResult",
        component: LuckyBookSearchResult,
      },
    ],
  },
  UNKNOWN: {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
};

function getFullPath(route: RoutesType): string {
  let params = "";

  if (route.params) {
    params = `/:${route.params.join("/:")}`;
  }

  return `${route.path}${params}`;
}

const renderRoute = (
  routes: RoutesType[],
  isRoot?: boolean
): JSX.Element[] | JSX.Element => {
  const renderRoutes = routes.map((route) => {
    const Component = route.component;
    const path = getFullPath(route);
    return route.children ? (
      <Route key={route.name} path={path} element={<Component />}>
        {renderRoute(route.children)}
      </Route>
    ) : (
      <Route
        key={route.name}
        path={path}
        index={route.setDefaultHome}
        element={<Component />}
      />
    );
  });

  return isRoot ? <Routes>{renderRoutes}</Routes> : renderRoutes;
};

const useCurrentRoute = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);

  const findRoute = (routes: RoutesType[], path: string): RoutesType | null => {
    for (const route of routes) {
      if (route.path.includes(path)) {
        return route;
      }
      if (route.children) {
        const childRoute = findRoute(route.children, path);
        if (childRoute) return childRoute;
      }
    }
    return null; // No match
  };


  const route = findRoute([ROUTES.HOME], currentPath);

  if (route) {
    return {
      name: route.name,
      path: route.path,
      component: route.component,
    };
  }

  // Fallback to unknown route
  const unknownRoute = findRoute([ROUTES.UNKNOWN], currentPath);
  return unknownRoute
    ? { name: unknownRoute.name, path: unknownRoute.path, component: unknownRoute.component }
    : { name: 'NotFound', path: "*", component: NotFound };
};


export type { RoutesType };

export { ROUTES, renderRoute, useCurrentRoute };
