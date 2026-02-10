import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Main from "./components/Main/Main.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return(
    <>
      <Header/>
      <Main/>
      <img src="src/assets/dog.webp" alt="" />
      <Footer home='Link for home' link1='Link for Link1' link2='Link for Link2'/>
    </>
  );
}

export default App;
