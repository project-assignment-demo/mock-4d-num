import { BrowserRouter, Route, Routes } from "react-router";

import { IntlProvider } from "react-intl";
import { useSiteStore } from "./store/index.ts";
import { en, ms, zh } from "./locale/index.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SwiperProvider } from "./context/SwiperContext.tsx";
import { renderRoute, ROUTES } from "./routes/index.tsx";

const messages: Record<string, any> = {
  en: en,
  zh: zh,
  ms: ms,
};

const queryClient = new QueryClient();

const App = () => {
  const locale = useSiteStore((state) => state.locale);

  //
  const routes = renderRoute(Object.values(ROUTES), true);
  return (
    <QueryClientProvider client={queryClient}>
      <IntlProvider
        messages={messages[locale]}
        locale={locale}
        defaultLocale="en"
      >
        <BrowserRouter>
          <SwiperProvider>{routes}</SwiperProvider>
        </BrowserRouter>
      </IntlProvider>
    </QueryClientProvider>
  );
};

export default App;
