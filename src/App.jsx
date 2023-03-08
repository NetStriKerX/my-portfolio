import "./App.css";
import Headers from "./components/Headers";
import Profile from "./components/Profile";
import SkillBox from "./components/SkillBox";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="w-screen h-full bg-[#FAF4F2]">
        <Headers />
        <Profile />
        <SkillBox />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
}

export default App;
