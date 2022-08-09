import Home from "./components/pages/home/Home";
import Driver from "./components/pages/driver/Driver"
import Schedule from "./components/pages/schedule/Schedule"

function App() {
  let componentPage 
  switch (window.location.pathname) {
    case "/driver": componentPage = <Driver />; break;
    case "/schedule": componentPage = <Schedule />; break;
    default: componentPage = <Home />; break;
  }
  return (
    <div className="App">
      {componentPage}
    </div>
  );
}

export default App;
