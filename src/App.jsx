import React from "react";
import Navbar from "./Components/Navbar";
import Manager from "./Components/manager";
import './App.css'

import Footer from "./Components/Footer";

function App() {
    return (
        <>
            <Navbar />
            <div className="min-h-[87vh]">
                <Manager /> 
                </div>
            <Footer />


        </>
    )
}

export default App