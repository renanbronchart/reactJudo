import React from 'react';
import AthletePreview from './AthletePreview';
import athletes from '../data/athletes';

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <div className="athletes-selector">
          {athletes.map(athleteData => {
            <AthletePreview id={athleteData.id} image={athleteData.image}  name={athleteData.name}/>
          })}
        </div>
      </div>
    );
  }
}
