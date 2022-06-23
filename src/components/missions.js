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
    <table>
      <thead>
        <tr>
          <th className="mission-name">Mission</th>
          <th className="mission-description">Description</th>
          <th className="mission-status">Status</th>
          <th>{' '}</th>
        </tr>
      </thead>
      <tbody>
        {displayMissions.map((mission, index) => (
          <tr key={[index]}>
            <td>{mission.name}</td>
            <td>{mission.description}</td>
            <td>{index}</td>
            <td><button type="button" className="button-mission">Join Mission</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
