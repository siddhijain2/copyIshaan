import TextToSpeech from "./TextToSpeech.js";
import Text from "./Text.js";
import Recorder from "./Recorder.jsx";
import ThemePage from "./themePage.jsx";
import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { Card,CardActions, CardContent, CardHeader } from "@material-ui/core";
import TextFeedback from "../../components/Enuncify/text-feedback.js";
import SpeechRecognizer from "../../components/Enuncify/speech-recognizer.js";
import Score from "../../components/Enuncify/score.js";



class Enuncify extends React.Component {
  static propTypes = {
    textReaded: PropTypes.string.isRequired,
    interimText: PropTypes.string.isRequired,
    textToRead: PropTypes.string.isRequired,
    talking: PropTypes.bool.isRequired,
    score: PropTypes.number.isRequired,
    textReadedFeedback: PropTypes.array.isRequired,
    lang: PropTypes.object.isRequired,
    displayTextReadedBox: PropTypes.bool.isRequired,
    onUpdateTextToRead: PropTypes.func.isRequired,
    onUpdateTextReaded: PropTypes.func.isRequired,
    onUpdateInterimText: PropTypes.func.isRequired,
    onUpdateLang: PropTypes.func.isRequired,
    toggleDisplayTextReadedBox: PropTypes.func.isRequired,
    onUpdateTalking: PropTypes.func.isRequired,
  };

  handleSpeech = (transcriptions) => {
    const text = transcriptions.text[0].text;

    if (transcriptions.final) {
      this.props.onUpdateTextReaded(`${this.props.textReaded} ${text.trim()}`);
      this.props.onUpdateInterimText("");
    } else {
      this.props.onUpdateInterimText(text);
    }
  };

  resetSpeech = () => {
    this.props.onUpdateTextReaded("");
    this.props.onUpdateInterimText("");
  };

  onTextReadedChange = (event) => {
    this.props.onUpdateTextReaded(event.currentTarget.innerText);
  };

  onInterimTextReadedChange = (event) => {
    this.props.onUpdateInterimText(event.currentTarget.innerText);
  };

  onStartTalking = () => {
    this.props.onUpdateTalking(true);
  };

  onStopTalking = () => {
    this.props.onUpdateTalking(false);
  };

  render() {
    console.log("Text Readed Feedback ",this.props.textReadedFeedback);
    const displayScore = !this.props.talking && this.props.textReadedFeedback.length > 0;

    return (
      <div >
        <div>
          <div>
            <Card >
              <CardActions >
                <button
                  onClick={this.props.toggleDisplayTextReadedBox}
                >
                  {this.props.displayTextReadedBox
                    ? `Hide text read`
                    : `Show text read`}
                </button>
              </CardActions>
              <CardContent>
                <TextFeedback
                  key={this.props.textToRead}
                  textReadedFeedback={this.props.textReadedFeedback}
                  textToRead={this.props.textToRead}
                  textReaded={this.props.textReaded}
                  interimText={this.props.interimText}
                  lang={this.props.lang.code}
                  onTextToReadChange={this.props.onUpdateTextToRead}
                  onEditTextToRead={this.resetSpeech}
                />
              </CardContent>
            </Card>
            <SpeechRecognizer
              onSpeech={this.handleSpeech}
              onReset={this.resetSpeech}
              onStartTalking={this.onStartTalking}
              onStopTalking={this.onStopTalking}
              talking={this.props.talking}
              displayResetButton={
                !!this.props.textReaded || !!this.props.interimText
              }
              langCode={this.props.lang.code}
            />

            {displayScore ? (
              <Score
                score={this.props.score}
                language={this.props.lang.englishName}
              />
            ) : null}
          </div>
          {this.props.displayTextReadedBox ? (
            <Grid item xs={12} sm={12} lg={6}>
              <Card>
                <CardHeader title={`Text read`}></CardHeader>
                <CardContent>
                  <h5>{`Final text`}</h5>
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={this.onTextReadedChange}
                  >
                    {this.props.textReaded}
                  </p>
                  <h5>{`Interim text`}</h5>
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={this.onInterimTextReadedChange}
                  >
                    {this.props.interimText}
                  </p>
                </CardContent>
              </Card>
            </Grid>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Enuncify;



// function Enuncify() {
//   const text = Text();
//   return (
//     <div className="mt-30 py-40">
//       <p>{text}</p>
//       <TextToSpeech/>
//       <Recorder/>
//     </div>
//   );
// }

// export default Enuncify;
