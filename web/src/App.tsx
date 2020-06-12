import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import React from "react";
import "./App.css";
import Navbar from "./components/nav";
import NearbySearch from "./components/nearby";
import "./css/main.css";

const client = new ApolloClient({
    uri: "http://localhost:8080/query",
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <Navbar />
                <NearbySearch />
            </div>
        </ApolloProvider>
    );
}

export default App;
