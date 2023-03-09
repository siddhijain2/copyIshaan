import ThemePage from "./themePage.jsx";
import React from "react";
import PropTypes, { string } from "prop-types";
import Grid from "@material-ui/core/Grid";
import { Card,CardActions, CardContent, CardHeader } from "@material-ui/core";
import TextFeedback from "../../components/Enuncify/text-feedback.js";
import SpeechRecognizer from "../../components/Enuncify/speech-recognizer.js";
import Score from "../../components/Enuncify/score.js";
import Header from "../../components/Navbar"
import Footer from "../../components/Footer";
import EmotionDisplay from "./displayEmotion.jsx";
import { textToReadInfo } from "../../constants/index";

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
    // this.props.displayEmotion = true;
  };

  render() {
    console.log("Text Readed Feedback ",this.props.textReadedFeedback);
    const displayScore = !this.props.talking && this.props.textReadedFeedback.length > 0;
    localStorage.removeItem("emotion");
    let text = this.props.textToRead;
    console.log(typeof(text));
    let Meaning = "";
    let keyword = "";
    let actualEmotion = "";

    if(textToReadInfo[text]){
      Meaning = textToReadInfo[text].meaning;
      keyword = textToReadInfo[text].keyword;
      actualEmotion = textToReadInfo[text].emotion;
    }



    return (
      <>
        <div className="flex-grow items-center">
          <Header />
          <div className="flex flex-col justify-center m-40 md-20">
            <div>
              <Card className="p-4 m-15 text-left min-w-90">
                <CardActions className="p-0 m-0 border-b border-gray-300 flex justify-between">
                  <button
                    className="pt-13"
                    onClick={this.props.toggleDisplayTextReadedBox}
                  >
                    {this.props.displayTextReadedBox
                      ? `Hide readed text`
                      : `Show readed text`}
                  </button>
                  <p>
                    {this.props.displayTextReadedBox
                      ? 
                        this.props.textReaded
                      : null }
                      
                  </p>
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
                  <div>
                    {keyword} :{Meaning}
                  </div>
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
              {displayScore ? (
                <EmotionDisplay rightEmotion={actualEmotion} />
              ) : null}
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Enuncify;

