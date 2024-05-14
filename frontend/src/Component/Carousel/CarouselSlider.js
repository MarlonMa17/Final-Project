import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Carousel.css';
import CarouselImage from './CarouselImage';

export default function CarouselSlider() {
  const img = "https://www.advanceconsulting.com/wp-content/uploads/2020/03/Beautiful-Business.jpg"; 
  return (
    <AwesomeSlider className="slider" animation="cubeAnimation">
      <div>
        <CarouselImage image="https://www.advanceconsulting.com/wp-content/uploads/2020/03/Beautiful-Business.jpg" alt="Image 1" className="image" note="Small Startup Company tailored to help local Businesses" />
      
      
      </div>
      <div>
        <CarouselImage image="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2019/10/business_with_esa/21093947-3-eng-GB/Business_with_ESA_pillars.jpg" alt="Image 2" className="image" />
      </div>
      <div>3</div>
      <div>4</div>
    </AwesomeSlider>
  );
}
