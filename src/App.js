import React from "react";
import Nav from "./components/Nav";
import UserTable from "./components/UserTable";
import ContextProvider from "./ContextAPI";

function App() {
  return (
    <ContextProvider>
    <div className="App">
      
      <Nav/>
        <UserTable/>
      </div>
      </ContextProvider>
  );
}

export default App;