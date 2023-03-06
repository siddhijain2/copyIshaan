import React from 'react';
import PropTypes from 'prop-types';

import * as speechRecognition from "../../pages/enuncify/services/speech-recognition.jsx";


const isChrome = !!(window.chrome && window.webkitSpeechRecognition);

class SpeechRecognizer extends React.Component {

  readingTimeout = null;

  static propTypes = {
    onSpeech: PropTypes.func.isRequired,
    langCode: PropTypes.string.isRequired,
    onReset: PropTypes.func.isRequired,
    onStartTalking: PropTypes.func.isRequired,
    onStopTalking: PropTypes.func.isRequired,
    talking: PropTypes.bool,
    displayResetButton: PropTypes.bool.isRequired,
    speechRecognitionSupported: PropTypes.bool,
    speechRecognition: PropTypes.object
  };

  static defaultProps = {
    speechRecognitionSupported: isChrome,
    speechRecognition: speechRecognition
  }

  constructor(props) {
    super(props);
    this.initSpeechRecognition(props);
  }

  initSpeechRecognition = (props) => {
    props.speechRecognition.init({
      interimResults: true,
      lang: props.langCode,
      onSpeech: this.handleSpeech.bind(this)
    });
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.langCode !== this.props.langCode) {
      this.initSpeechRecognition(nextProps);
    }
  }

  openGoogleChrome = () => {
    window.open('https://www.google.com/chrome/index.html', '_blank').focus();
  }

  handleSpeech = (transcriptions) => {
    clearTimeout(this.readingTimeout);
    this.readingTimeout = setTimeout(this.stopTalking, 4000);
    this.props.onSpeech(transcriptions);
  }

  startTalking = () => {
    this.props.onStartTalking();
    this.props.speechRecognition.start();
  }

  stopTalking = () => {
    this.props.onStopTalking();
    this.props.speechRecognition.stop();
  }

  render() {

    if (!this.props.speechRecognitionSupported) {
      return (
        <div >
          <button onClick={this.openGoogleChrome}>
            <img
              alt="Google Chrome"
              src="/chrome.svg"
            />
            <span
            >{`Speech recognition is only supported by Google Chrome Desktop`}</span>
          </button>
        </div>
      );
    }

    if (this.props.talking) {
      return (
        <div>
          <button onClick={this.stopTalking}>
            <i className="material-icons">mic_off</i> {`Stop reading`}
          </button>
        </div>
      );
    }

    if (this.props.displayResetButton) {
      return (
        <div>
          <button onClick={this.props.onReset}>
            <i className="material-icons">replay</i> {`Reset`}
          </button>
          <button  onClick={this.startTalking}>
            <i className="material-icons">mic</i> {`Continue reading`}
          </button>
        </div>
      );
    }

    return (
      <div>
        <button onClick={this.startTalking}>
          <i className='material-icons'>mic</i> {`Start reading`}
        </button>
      </div>
    );
  }
}

export default SpeechRecognizer;
