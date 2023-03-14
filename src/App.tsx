import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import "./App.css";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <Router />
      <Toaster toastOptions={{
        className: '',
        duration: 3000,
        style: {
          borderRadius: '10px',
          background: '#44475d',
          color: '#fff',
          // animationTimeline: '3000'
        },
      }} />
    </BrowserRouter>
  );
}

export default App;
