src/App.jsx
import React from "react";
 import PageTitle from "./components/PageTitle";
import AddressBookContainer from "./components/AddressBookContainer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Address Book</h1>
      { <PageTitle title="Your Contacts" /> }
      <AddressBookContainer />
    </div>
  );
};

export default App;
