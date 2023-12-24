
import './App.css';
import Navbar from './comoponents/Navbar';
import News from './comoponents/News';
import {  BrowserRouter,Route, Routes } from "react-router-dom"
import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

const App =(props)=>{

  

  const[progress,setProgress]=useState(0)

 
  
 
    return (
      <div className="App">
      
      
      

      <BrowserRouter>
        <Navbar  />
        <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
        
        <Routes>
          <Route exact path="/" element= {<News setProgress={setProgress} key="sports" pageSize={5} country="in" category="sports"  />}/>
          <Route exact path="/business" element= {<News setProgress={setProgress} key="business" pageSize={5} country="in" category="business"  />}/>
          <Route exact path='/entertainment'element= {<News setProgress={setProgress} key="entertainment" pageSize={5} country="in" category="entertainment"  />}/>
          <Route exact path='/general'element= {<News setProgress={setProgress} key="general" pageSize={5} country="in" category="general"  />}/>
          <Route exact path='/health'element= {<News setProgress={setProgress} key="health" pageSize={5} country="in" category="health"  />}/>
          <Route exact path='/science'element= {<News setProgress={setProgress} key="science" pageSize={5} country="in" category="science" />}/>
          
          <Route exact path='/technology'element= {<News setProgress={setProgress} key="technology" pageSize={5} country="in" category="technology"  />}/>
          
        
        </Routes>
      </BrowserRouter>
    </div>
    )
  }


export default App




