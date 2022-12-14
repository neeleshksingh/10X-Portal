import React, {useState} from "react";
import './App.css';
import Navigation from "./navigation";
import { BrowserRouter,Routes,Route,Outlet } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import LocationDisplay from "./locationdesplay";


const App=()=>{

        return(
            <div >
              
              <BrowserRouter>
                <Routes>
                    <Route path='/' element={<><Navigation/><Outlet/></>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='About' element={<About/>}/>
                    </Route>
                    <Route path='*' element={<><div>No Match</div></>}/>
                                 
                    </Routes>
              </BrowserRouter>
              <LocationDisplay/>
            </div>
        )
    }



export default App;
