import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { joinMission, fetchData, leaveMission } from '../redux/missions/missions';

const Missions = () => {
  const displayMissions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const handleJoin = (id) => {
    dispatch(joinMission(id));
  };

  const handleLeave = (id) => {
    dispatch(leaveMission(id));
  };
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
            <td className="text-center">{(mission.join) ? <span className="status-field unavailable-status">Not a Member</span> : <span className="status-field available-status">Active Member</span> }</td>
            <td className="text-center">
              {(mission.join) ? <button type="button" className="button-mission join-mission" onClick={() => handleJoin(mission.id)}>Join Mission</button>
                : <button type="button" className="button-mission leave-mission" onClick={() => handleLeave(mission.id)}>Leave Mission</button>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
