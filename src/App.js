import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataSource from "./components/dataSource/DataSource";
import CreateRules from "./components/createRules/CreateRules";
import { Urls } from "./res/values/Urls";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<DataSource />} />
        <Route path={Urls.dataSource} element={<DataSource  />} />
        <Route path={Urls.createRules} element={<CreateRules />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
