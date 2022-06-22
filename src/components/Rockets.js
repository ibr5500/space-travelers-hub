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
    <div>
      Rockets
      <div>
        {displayRockets.map((rocket) => (
          <p key={rocket.id}>
            {rocket.id}
            ,
            {rocket.name}
            ,
            {rocket.type}
            ,
            <img src={rocket.image} alt={rocket.name} />
          </p>
        ))}
      </div>
    </div>
  );
};

export default Rockets;
