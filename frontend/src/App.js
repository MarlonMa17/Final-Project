
import './App.css';
import Navbar from './Component/NavBar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselImage from './Component/Carousel/CarouselImage';
import WebsiteViewer from './Component/WebsiteViewer/WebsiteViewer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <WebsiteViewer />
      <CarouselImage />
    </div>
  );
}

export default App;
