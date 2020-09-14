import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { resetPageNo } from "./../../redux/app/actions";

class ReduxSample extends React.Component {
  render() {
    return <div>Redux setup complete</div>;
  }
}

const mapStateToProps = (state) => {
  return { searchString: state.app.searchString };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ resetPageNo }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxSample);
