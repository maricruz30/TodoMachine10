//import logo from './platzi.webp';
import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

function App() { 


  return(
    // Debido a que AppUi esta encapsulado en TodoProvider ... que es un context... 
    // ahora el y todos sus hijos van a poder acceder a lo que esta expuesto por value en children
    <TodoProvider>
      <AppUI/>
    </TodoProvider> 
  );

}
export default App;
