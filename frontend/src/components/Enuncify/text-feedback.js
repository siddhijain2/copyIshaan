import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Rainbow from 'rainbowvis.js';

import TextSpeak from "./text-speak.js";




class TextFeedback extends React.Component {

  static propTypes = {
    textReadedFeedback: PropTypes.array.isRequired,
    textToRead: PropTypes.string.isRequired,
    textReaded: PropTypes.string.isRequired,
    interimText: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
    onEditTextToRead: PropTypes.func.isRequired,
    onTextToReadChange: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
    this.redToGreen = new Rainbow();
    this.redToGreen.setSpectrum('red', 'orange', 'green');
  }

  getInterimTextRange = (textReadedFeedback) => {
    const start = textReadedFeedback.map(item => item.value).join('').length;

    let interimTextEnd = start;
    if (this.props.interimText) {
      interimTextEnd = this.props.textToRead.indexOf(' ', start + this.props.interimText.length);
    }
    return {
      start,
      end: interimTextEnd
    };
  }

  renderTextReadedFeedback = (textReadedFeedback) => {
    const lang = "en-IN";
    return textReadedFeedback
      .map((part, index) => {
        if (!_.has(part, 'similarity')) {
          part.similarity = 1
        }
        let color = this.redToGreen.colourAt(part.similarity * 100);
        const style = {
          color: `#${color}`
        };

        return (          
          <TextSpeak
            key={`${part.value}${index}`}
            style={style}
            text={part.value}
            lang={lang}
            onHover={this.onTextSpeakHover}
          />
        );
      });
  }

  onBlur = (event) => {
    this.props.onTextToReadChange(event.currentTarget.innerText);
  }

  onPaste = (event) => {
    event.preventDefault();
    this.props.onTextToReadChange(event.clipboardData.getData('text/plain'))
  }

  onMouseEnter = () => {
    this.setState({
      hover: true
    });
  }

  onMouseLeave = () => {
    this.setState({
      hover: false
    });
  }

  onTextSpeakHover = (hover) => {
    this.setState({hover: !hover});
  }

  render() {
    const textReadedFeedback = this.props.textReadedFeedback;
    const interimTextRange = this.getInterimTextRange(textReadedFeedback);
    return (
      <div >
        <p
          contentEditable
          suppressContentEditableWarning
          onFocus={this.props.onEditTextToRead}
          onPaste={this.onPaste}
          onBlur={this.onBlur}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
         >
          {this.renderTextReadedFeedback(textReadedFeedback)}
          <TextSpeak
            text={this.props.textToRead.slice(interimTextRange.start, interimTextRange.end)}
            lang={this.props.lang}
            onHover={this.onTextSpeakHover}/>
          <TextSpeak
            text={this.props.textToRead.slice(interimTextRange.end)}
            lang={this.props.lang}
            onHover={this.onTextSpeakHover}/>
        </p>
      </div>
    );
  }
}

export default TextFeedback;
