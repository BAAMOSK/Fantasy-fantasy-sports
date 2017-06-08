import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTeams } from '../actions';

class OwnerList extends Component {
  // constructor(props){
  //   super(props);
  // }
  componentDidMount() {
    this.props.dispatch(fetchTeams());
  }

  render() {
    let arr = [];
    const ownerArr = this.props.teams.map((team, index) => {
      if (!(team.owner in arr)) {
        arr.push(team.owner);
        return (
          <li key={index}>
            <Link to={'/owners/' + team.owner} index={index}>{team.owner}</Link>
          </li>
        );
      }
    });
    return (
      <div>
        <ul>
          {ownerArr}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    teams: state.owner.teams,
  };
};

export default connect(mapStateToProps)(OwnerList);
