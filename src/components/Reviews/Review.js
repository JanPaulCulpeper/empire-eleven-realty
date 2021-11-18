import { FaStar} from "react-icons/fa";


const Review = ({ review }) => {
  const { name, stars, message, img  } = review;

  // const commaNumber = require('comma-number')

  return (
    <div className='slide'>
      <div className="slideS">
      <p size>{name}</p>
      <d>"{message}"</d>
      <div className="sideStars">
      <icon><FaStar size="2em"/> </icon>
      <icon><FaStar size="2em"/> </icon>
      <icon><FaStar size="2em"/> </icon>
      <icon><FaStar size="2em"/> </icon>
      <icon><FaStar size="2em"/> </icon>
      </div>
      </div>
    </div>
  );
};

export default Review;