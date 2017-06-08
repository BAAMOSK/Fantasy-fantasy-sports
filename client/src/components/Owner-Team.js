import React from 'react';
// import OwnerPlayer from './OwnerPlayer';
import { connect } from 'react-redux';
import OwnerPlayer from './Owner-Player';

const OwnerTeam = props => {
  console.log(props.team.memberIds);
  let arr = [];
  let index = 0;
  for (let key in props.team.memberIds) {
    arr.push(
      <OwnerPlayer
        player={props.team.memberIds[key]}
        index={index}
        key={index}
      />,
    );
    index++;
  }
  return (
    <div>
      {arr}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.owner.data,
  };
};
export default connect(mapStateToProps)(OwnerTeam);
