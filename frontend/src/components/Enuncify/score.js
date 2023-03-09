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
      <div className="flex flex-col items-center">
        <div className="m-5 font-bold text-xl">
          <h1>Analysis Report </h1>
        </div>
        <div className="m-2">Accuracy</div>

        {this.props.score < 100 ? (
          <CirclePie
            width={120}
            height={120}
            strokeWidth={15}
            percent={this.props.score}
            strokeColor={`#${color}`}
            labelColor={`#${color}`}
          />
        ) : (
          <span className="w-36 h-36 bg-green-500 rounded-full flex justify-center items-center">
            <span className="w-28 h-28 text-green-500 rounded-full bg-white flex items-center justify-center font-bold text-xl">
              100%
            </span>
          </span>
        )}
        <h2 className="mt-4">{scoreName}</h2>
        <div className="mt-3">
          <p>
            <span className="text-Red">Red Words:</span> Need to work on
            these
          </p>
          <p>
            <span className="text-Orange">Orange Words:</span> You're so close,
            keep practicing!
          </p>
          <p>
            <span className='text-Green'>Green Words: </span>You're amazing, keep up the good work!{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default Score;
