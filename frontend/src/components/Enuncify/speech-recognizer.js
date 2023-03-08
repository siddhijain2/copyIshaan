import React from 'react';
import PropTypes from 'prop-types';
import * as speechRecognition from "../../pages/enuncify/services/speech-recognition.jsx";
import MicOffIcon from "@material-ui/icons/MicOff";
import MicIcon from "@mui/icons-material/Mic";
import ReplayIcon from "@mui/icons-material/Replay";

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
    speechRecognition: PropTypes.object,
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
      onSpeech: this.handleSpeech.bind(this),
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
        <div className="text-center">
          <button onClick={this.openGoogleChrome}>
            <img
              alt="Google Chrome"
              src="/chrome.svg"
              className="w-12 h-12 mr-4"
            />
            <span className="pt-3">{`Speech recognition is only supported by Google Chrome Desktop`}</span>
          </button>
        </div>
      );
    }

    if (this.props.talking) {
      return (
        <div className="text-center p-4">
          <button
            className="py-2 px-4 font-medium text-[16px] text-primary bg-Tomato rounded outline-none"
            onClick={this.stopTalking}
          >
            <MicOffIcon/>
            {`Stop reading`}
          </button>
        </div>
      );
    }

    if (this.props.displayResetButton) {
      return (
        <div className="flex justify-between px-2.3 p-4">
          <button
            className="py-2 px-4 font-medium text-[16px] text-primary bg-Tomato rounded outline-none"
            onClick={this.props.onReset}
          >
            <ReplayIcon />
            {`Reset`}
          </button>
          <button
            className=" py-2 px-4 font-medium text-[16px] text-primary bg-Tomato rounded outline-none"
            onClick={this.startTalking}
          >
            <MicIcon /> {`Continue reading`}
          </button>
        </div>
      );
    }
    if(this.props.displayResetButton){
      <div>{localStorage.getItem("emotion")}</div>
    }

    return (
      <div className="p-4 text-center">
        <button
          className="py-2 px-4 font-medium text-[16px] text-primary bg-Tomato rounded outline-none"
          onClick={this.startTalking}
        >
          <MicIcon/> 
          {`Start reading`}
        </button>
        
      </div>
    );
  }
}

export default SpeechRecognizer;
