import React, { Component } from 'react';
import { connect } from 'react-redux';
import './owner-player.css';

class OwnerPlayer extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Player Name</th>
            <th>Team</th>
            <th>Position</th>
            <th>Points/pg</th>
            <th>Rebounds/pg</th>
            <th>Assists/pg</th>
            <th>Steals/pg</th>
            <th>TurnOvers/pg</th>
          </tr>
          {this.props.player
            ? <tr>
                <td name={this.props.player.player.FirstName + 'name'}>
                  {this.props.player.player.FirstName}
                  {' '}
                  {this.props.player.player.LastName}
                </td>
                <td name={this.props.player.player.FirstName + 'team'}>
                  {this.props.player.team.Name}
                </td>
                <td name={this.props.player.player.FirstName + 'position'}>
                  {this.props.player.player.Position}
                </td>

                <td
                  name={this.props.player.player.FirstName + 'points-per-game'}
                >
                  {this.props.player.stats.PtsPerGame['#text']}
                </td>
                <td name={this.props.player.player.FirstName + 'rebounds'}>
                  {this.props.player.stats.RebPerGame['#text']}
                </td>
                <td name={this.props.player.player.FirstName + 'steals'}>
                  {this.props.player.stats.StlPerGame['#text']}
                </td>
                <td name={this.props.player.player.FirstName + 'assists'}>
                  {this.props.player.stats.AstPerGame['#text']}
                </td>
                <td name={this.props.player.player.FirstName + 'turnovers'}>
                  {this.props.player.stats.TovPerGame['#text']}
                </td>
              </tr>
            : ''}
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.owner.teamData[ownProps.index],
  };
};

export default connect(mapStateToProps)(OwnerPlayer);
