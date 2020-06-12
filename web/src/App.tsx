import React, { useCallback, useState } from "react";
import "./css/main.css";
import "./App.css";
import Navbar from "./components/nav";
import NearbySearch from "./components/nearby";

function App() {
    return (
        <div className="App">
            <Navbar />
            <NearbySearch />
        </div>
    );
}

export default App;
