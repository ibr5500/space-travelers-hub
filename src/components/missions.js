import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/missions/missions';

const Missions = () => {
  const displayMissions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div>
      Missions
      <div>
        {displayMissions.map((mission, index) => (
          <div key={[index]}>
            <div>
              <h2>{mission.name}</h2>
              <p>{mission.description}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Missions;
