import React, { useState } from 'react';
import './App.css';
import {Cover, Themes, Switch} from './components'
import { ThemeProvider } from 'styled-components'
//  STYLES
// import "./components/styled.css";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
    <ThemeProvider theme={Themes[theme]}>
      <Switch theme={theme} setTheme={setTheme}/>
      <Cover theme={theme} />
    </ThemeProvider>
    </>
  )
  // ---------------------------------start FORMA 1
  // const [theme, setTheme] = useState("light")
  // return (
  //   <ThemeProvider theme={themes[theme]}>
  //     <Screen theme={theme} setTheme={setTheme}/>
  //   </ThemeProvider>
  // );
  // ---------------------------------end FORMA 1
  // ---------------------------- start FROMA 2
  // const [darkMode, setDarkMode] = useState(false);
  // return (
  //   <div className={ darkMode? "dark-mode" : "light-mode"}>
  //     <div className="container">
  //       <span style={{ color: darkMode? "grey" : "yellow" }}>☀︎</span>
  //       <div className="switch-checkbox">
  //         <label className="switch">
  //           <input type="checkbox" onChange={()=> setDarkMode(!darkMode)}/>
  //           <span className="slider round"> </span>
  //         </label>
  //       </div>
  //       <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
  //     </div>
  //     <div>
  //       <h1>Cool its {darkMode ? "Dark" : "Light"} Mode </h1>
  //     </div>
  //   </div>
  // )
  // ---------------------------- end FROMA 2
}

export default App;
