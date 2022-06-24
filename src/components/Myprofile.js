import React from 'react';
import { useSelector } from 'react-redux';

const Myprofile = () => {
  const displayRockets = useSelector((state) => state.rockets);
  const displayMissions = useSelector((state) => state.missions);
  const reserveRockets = displayRockets.filter((rocket) => rocket.reserved);
  const joinedMissions = displayMissions.filter((mission) => mission.joined);

  return (
    <div className="profile-container">
      <div className="my-missions">
        <h2>My Missions</h2>
        <div className="my-missions-list">
          {(!joinedMissions.length) ? <h4 key="0" className="empty-list">You did not join any mission</h4> : ''}
          {joinedMissions.map((mission) => (
            <h4 key={mission.id}>{mission.name}</h4>
          ))}
        </div>
      </div>
      <div className="my-rockets">
        <h2>My Rockets</h2>
        <div className="my-rockets-list">
          {(!reserveRockets.length) ? <h4 key="0" className="empty-list">You did not reserved any rocket</h4> : ''}
          {reserveRockets.map((rocket) => (
            <h4 key={rocket.id}>{rocket.name}</h4>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Myprofile;
