import React, { Component } from 'react';


class Header extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <select name="sports">
          {/*<option value hidden>Pick a sport</option>*/}
          <option value="basketball">Basketball</option>
          {/*<option value="hockey">Hockey</option>
          <option value="baseball">Baseball</option>
          <option value="football">Football</option>*/}
        </select>
        <span> </span>
        <select>
          <option value hidden>Pick a team</option>
          <option value="ATL">Atlanta Hawks</option>
          <option value="BKN">Brooklyn Nets</option>
          <option value="BOS">Boston Celtics</option>
          <option value="CHA">Charlotte Hornets</option>
          <option value="CHI">Chicago Bulls</option>
          <option value="CLE">Cleveland Cavaliers</option>
          <option value="DAL">Dallas Mavericks</option>
          <option value="DEN">Denver Nuggets</option>
          <option value="DET">Detroit Pistons</option>
          <option value="GSW">Golden State Warriors</option>
          <option value="HOU">Houston Rockets</option>
          <option value="IND">Indiana Pacers</option>
          <option value="LAC">Los Angeles Clippers</option>
          <option value="LAL">Los Angeles Lakers</option>
          <option value="MEM">Memphis Grizzlies</option>
          <option value="MIA">Miami Heat</option>
          <option value="MIL">Milwaukee Bucks</option>
          <option value="MIN">Minnesota Timberwolves</option>
          <option value="NOP">New Orleans Pelicans</option>
          <option value="NYK">New York Knicks</option>
          <option value="OKC">Oklahoma City Thunder</option>
          <option value="ORL">Orlando Magic</option>
          <option value="PHI">Philadelphia 76ers</option>
          <option value="PHX">Phoenix Suns</option>
          <option value="POR">Portland Trail Blazers</option>
          <option value="SAC">Sacramento Kings</option>
          <option value="SAS">San Antonio Spurs</option>
          <option value="TOR">Toronto Raptors</option>
          <option value="UTA">Utah Jazz</option>
          <option value="WAS">Washington Wizards</option>
        </select>
      </div>
    );
  }
}

export default Header;