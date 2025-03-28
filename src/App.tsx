import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./pages/Layout";
import Jackpot from "./pages/Jackpot";
import SpecialDate from "./pages/SpecialDate";
import NumberAnalysis from "./pages/NumberAnalysis";
import SpinMyLuck from "./pages/SpinMyLuck";
import Hot4DNumber from "./pages/Hot4DNumber";
import LuckyBook from "./pages/LuckyBook";

import { IntlProvider } from "react-intl";
import { useSiteStore } from "./store/index.ts";
import { en, ms, zh } from "./locale/index.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./pages/Dashboard";
import { SwiperProvider } from "./context/SwiperContext.tsx";

const messages: Record<string, any> = {
  en: en,
  zh: zh,
  ms: ms,
};

const queryClient = new QueryClient();

const App = () => {
  const locale = useSiteStore((state) => state.locale);

  return (
    <QueryClientProvider client={queryClient}>
      <IntlProvider
        messages={messages[locale]}
        locale={locale}
        defaultLocale="en"
      >
        <BrowserRouter>
          <SwiperProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="jackpot" element={<Jackpot />} />
                <Route path="special-date" element={<SpecialDate />} />
                <Route path="number-analysis" element={<NumberAnalysis />} />
                <Route path="spin-my-luck" element={<SpinMyLuck />} />
                <Route path="hot-dddd-num" element={<Hot4DNumber />} />
                <Route path="lucky-book" element={<LuckyBook />} />
              </Route>
            </Routes>
          </SwiperProvider>
        </BrowserRouter>
      </IntlProvider>
    </QueryClientProvider>
  );
};

export default App;
