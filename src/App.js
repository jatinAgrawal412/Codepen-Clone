import React from "react";
import Home from "./components/Home";
import DataProvider from './contex/DataProvider';

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
