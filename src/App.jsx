import React, { useEffect } from "react";
import AppRouter from "./router/AppRouter";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 50,
      easing: "ease-out",
      delay: 100,
    });
    
    // Refresh AOS on route change
    AOS.refresh();
  }, []);

  return <AppRouter />;
}

export default App;
