import { Box } from "@chakra-ui/react";
import PageWrapper from "organisms/PageWrapper/PageWrapper";
import Accounts from "pages/Accounts";
import Clients from "pages/Clients";
import Financials from "pages/Financials";
import Home from "pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Box px="5" className="App">
      <Routes>
        <Route path="/" element={<PageWrapper pageComponent={Home} />} />
        <Route
          path="/clients"
          element={<PageWrapper pageComponent={Clients} />}
        />
        <Route
          path="/accounts"
          element={<PageWrapper pageComponent={Accounts} />}
        />
        <Route
          path="/financials"
          element={<PageWrapper pageComponent={Financials} />}
        />
      </Routes>
    </Box>
  );
}

export default App;
