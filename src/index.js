import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './Form'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NextUIProvider } from '@nextui-org/react';
import './index.css'

 const App = () => {
   return (
     <NextUIProvider>
         <Form />
     </NextUIProvider>
   );
 }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)



