 import  {createContext , useContext, useState } from 'react'
 const ThemContext = createContext();
 
 export  function ThemeProvider({children}) {
    const [darkMode , setDarkMode] = useState(false);
    const toggleDarkMode = () => {setDarkMode((prev) => !prev)}
   return (
     <ThemContext.Provider value={{darkMode , toggleDarkMode}}>
       {children}
     </ThemContext.Provider>
   )
 }

 export function useTheme() {
    return useContext(ThemContext)
 }
 