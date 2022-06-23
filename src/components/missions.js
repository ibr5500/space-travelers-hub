import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { joinMission, fetchData, leaveMission } from '../redux/missions/missions';

const Missions = () => {
  const displayMissions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!displayMissions.length) dispatch(fetchData());
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
          <th className="mission-name"><h3>Mission</h3></th>
          <th className="mission-description"><h3>Description</h3></th>
          <th className="mission-status"><h3>Status</h3></th>
          <th>{' '}</th>
        </tr>
      </thead>
      <tbody>
        {displayMissions.map((mission, index) => (
          <tr className="mission-row" key={[index]}>
            <td><h4>{mission.name}</h4></td>
            <td>{mission.description}</td>
            <td className="text-center mission-status">
              {(mission.joined)
                ? <span className="status-field available-status">Active Member</span>
                : <span className="status-field unavailable-status">Not a Member</span>}
            </td>
            <td className="text-center mission-action">
              {(mission.joined)
                ? <button type="button" className="button-mission leave-mission" onClick={() => handleLeave(mission.id)}>Leave Mission</button>
                : <button type="button" className="button-mission join-mission" onClick={() => handleJoin(mission.id)}>Join Mission</button>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
