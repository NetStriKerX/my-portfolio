import "./App.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import SkillBox from "./components/SkillBox";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App w-screen h-full bg-[#FAF4F2]">
      <Header />
      <Profile />
      <SkillBox />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
