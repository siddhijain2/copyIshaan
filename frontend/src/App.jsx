import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainRoutes from "./routes";
import { LogIn, SignIn, Enuncify,Home } from "./pages";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";


import {
  updateTextToRead,
  updateTextReaded,
  updateInterimText,
} from "./pages/enuncify/actions/texts-actions";
import {
  updateLang,
  toggleDisplayTextReadedBox,
} from "./pages/enuncify/actions/settings-actions";
import {
  scoreSelector,
  textReadedFeedbackSelector,
} from "./pages/enuncify/selectors/results-selectors";
import { updateTalking } from "./pages/enuncify/actions/recognition-actions";

const mapStateToProps = (state, ownProps) => {
  return {
    textToRead: state.texts.textToRead,
    textReaded: state.texts.textReaded,
    interimText: state.texts.interimText,
    score: scoreSelector(state),
    textReadedFeedback: textReadedFeedbackSelector(state),
    lang: state.settings.lang,
    displayTextReadedBox: state.settings.displayTextReadedBox,
    talking: state.recognition.talking,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdateTextToRead: bindActionCreators(updateTextToRead, dispatch),
    onUpdateTextReaded: bindActionCreators(updateTextReaded, dispatch),
    onUpdateInterimText: bindActionCreators(updateInterimText, dispatch),
    onUpdateLang: bindActionCreators(updateLang, dispatch),
    toggleDisplayTextReadedBox: bindActionCreators(
      toggleDisplayTextReadedBox,
      dispatch
    ),
    onUpdateTalking: bindActionCreators(updateTalking, dispatch),
  };
};

const EnuncifyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Enuncify);

function App() {
  return (
    <Router>
      <div className="bg-primary w-full overflow-hidden font-poppins">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<MainRoutes />} />
          <Route path="/enuncify" element={<EnuncifyContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
