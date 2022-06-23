import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket, cancelReseve, fetchData } from '../redux/rockets/rockets';

const Rockets = () => {
  const displayRockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const handleReserve = (id) => {
    dispatch(reserveRocket(id));
  };

  const handleCancel = (id) => {
    dispatch(cancelReseve(id));
  };

  return (
    <div className="rocket-container">
      {displayRockets.map((rocket, index) => (
        <div key={[index]} className="rocket">
          <img className="rocket-img" src={rocket.image} alt={rocket.name} />
          <div className="rocket-info">
            <h2>{rocket.name}</h2>
            <p>
              {(rocket.reserved) ? <span>Reserved</span> : '' }
              {rocket.description}
            </p>
            {(rocket.reserved) ? <button type="button" className="canceled" onClick={() => handleCancel(rocket.id)}>Cancel Reservation</button>
              : <button type="button" className="booked" onClick={() => handleReserve(rocket.id)}>Reserve Rocket</button> }
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
