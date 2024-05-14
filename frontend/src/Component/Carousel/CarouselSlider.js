import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Carousel.css';

export default function CarouselSlider() {
  const img = "https://www.advanceconsulting.com/wp-content/uploads/2020/03/Beautiful-Business.jpg"; 
  return (
    <AwesomeSlider className = "slider" animation="cubeAnimation">
      <div>
        <img src={img} alt="Image 1" className="image" />
      </div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </AwesomeSlider>
  );
}
