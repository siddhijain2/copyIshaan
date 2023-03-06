import React from 'react';
import PropTypes from 'prop-types';
import Rainbow from 'rainbowvis.js';
import { CirclePie } from 'salad-ui.chart'


console.log("Calling it ")
const RATES = [{
  result: () => `Bad`,
  min: 0,
  max: 39
}, {
  result: () => `Regular`,
  min: 40,
  max: 59
}, {
  result: () => `Good`,
  min: 60,
  max: 84
}, {
  result: () => `Excellent`,
  min: 85,
  max: 99
}, {
  result: () => `Perfect`,
  min: 100,
  max: 100
}];




class Score extends React.Component {
  
  static propTypes = {
    score: PropTypes.number.isRequired,
    language: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.redToGreen = new Rainbow();
    this.redToGreen.setSpectrum('red', '#ffac0a', '#bbc60c', '#76c60c', '#05b515');
  }

  getScoreName(score) {
    console.log("Reaching Here");
    return RATES
      .find((rate, index) => score >= rate.min && score <= rate.max)
      .result();
  }

  render() {
    const scoreName = this.getScoreName(this.props.score);
    const color = this.redToGreen.colourAt(this.props.score);
    const lang = this.props.language.split(' (')[0];
    return (
      <div >
        {this.props.score < 100 ?
          <CirclePie width={140} height={140} strokeWidth={15} percent={this.props.score} strokeColor={`#${color}`} labelColor={`#${color}`}/> :
          <span ><span>100%</span></span>
        }
        <h2>{scoreName}</h2>
        <p>Red: Need to work on these </p>
        <p>Orange : Quite close....need a little bit of more practice</p>
        <p>Green: Yayy....You got them right</p>
      </div>
    );
  }
}

export default Score;
