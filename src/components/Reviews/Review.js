



const Review = ({ review }) => {
  const { name, stars, message, img  } = review;

  const commaNumber = require('comma-number')

  

  return (
    <div className='slide'>
      <p size>{name}</p>
      <p>{message}</p>
      <h6>{commaNumber(stars)} Stars</h6>
    </div>
  );
};

export default Review;