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
        {displayMissions.map((mission, index, reserved, joinMission, leaveMission, id) => (
          <tr key={[index]}>
            <td>{mission.name}</td>
            <td>{mission.description}</td>
            <td className="text-center"><span className={(!reserved && 'status-field unavailable-status') || (reserved && 'status-field available-status')}>{(!reserved && 'NOT A MEMBER') || (reserved && 'ACTIVE MEMBER')}</span></td>
            <td className="text-center"><button onClick={() => dispatch((!reserved && joinMission(id)) || (reserved && leaveMission(id)))} className={(!reserved && 'button-mission join-mission') || (reserved && 'button-mission leave-mission')} type="button">{(!reserved && 'JOIN MISSION') || (reserved && 'LEAVE MISSION')}</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
