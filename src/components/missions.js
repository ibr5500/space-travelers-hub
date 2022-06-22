import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/rockets/missions';

const Missions = () => {
  const displayRockets = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div>
      Missions
      <div>
        {displayRockets.map((mission) => (
          <p key={missions.id}>
            {mission.id}
            ,
            {mission.name}
            ,
            {mission.description}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Missions;
