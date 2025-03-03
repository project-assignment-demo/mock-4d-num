import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./pages/Layout";
import DashBoard from "./pages/Dashboard";
import Jackpot from "./pages/Jackpot";
import SpecialDate from "./pages/SpecialDate";
import NumberAnalysis from "./pages/NumberAnalysis";
import SpinMyLuck from "./pages/SpinMyLuck";
import Hot4DNumber from "./pages/Hot4DNumber";
import LuckyBook from "./pages/LuckyBook";

import { IntlProvider } from 'react-intl'
import { useSettingStore } from "./store/index.ts";
import { en, ms, zh } from "./locale/index.ts";



const messages: Record<string, any> = {
  "en": en,
  "zh": zh,
  "ms": ms,
}


const App = () => {

  const locale = useSettingStore(state => state.locale)

  return (
    <IntlProvider messages={messages[locale]} locale={locale} defaultLocale="en">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<DashBoard />} />
        <Route path="jackpot" element={<Jackpot />} />
        <Route path="special-date" element={<SpecialDate />} />
        <Route path="number-analysis" element={<NumberAnalysis />} />
        <Route path="lucky-book" element={<SpinMyLuck />} />
        <Route path="hot-dddd-num" element={<Hot4DNumber />} />
        <Route path="lucky-book" element={<LuckyBook />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </IntlProvider>
  )
};


export default App;