import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="flex-row">
        <Navigation />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
