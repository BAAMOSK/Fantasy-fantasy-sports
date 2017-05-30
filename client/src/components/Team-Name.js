import React from 'react';

const TeamName = () => {
  const imgUrl = 'http://i.cdn.turner.com/nba/nba/teamsites/images/legacy/warriors/LogoPrimary_300x329.jpg';
  return (
    <div>
      <img src={imgUrl} height={75} width={75} />
      <h1>Golden State Warriors</h1>
    </div>
  )
}

export default TeamName;