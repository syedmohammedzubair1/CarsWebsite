import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Header from './Components/Header';
import Topbar from './Components/Topbar';
import "bootstrap-icons/font/bootstrap-icons.min.css"
import Footer from './Components/footer';
import Routing from './Components/Routing';
import "animate.css"

function App() {
  return (
    <main className="container-fluid p-0">
      <Topbar/>
      <Header/>
      <Routing/>
      <Footer/>
    </main>
  );
}

export default App;
