import React from'react';
import { Link } from 'react-router';
import athletes from '../data/athletes';

export default class AthletesMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="athletes-menu">
        athletes.map(menuAthlete => {
          return <Link key={menuAthlete.id} to={`/athlete/${menuAthlete.name}`} activeClassName="active">
            {menuAthlete.name}
          </Link>
        })
      </nav>
    );
  }
}
