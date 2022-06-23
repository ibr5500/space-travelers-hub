import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/rockets/rockets';

const Rockets = () => {
  const displayRockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="rocket-container">
      {displayRockets.map((rocket, index) => (
        <div key={[index]} className="rocket">
          <img className="rocket-img" src={rocket.image} alt={rocket.name} />
          <div className="rocket-info">
            <h2>{rocket.name}</h2>
            <p>
              <span>Reserved</span>
              {rocket.description}
            </p>
            <button type="button">Reserve Rocket</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
