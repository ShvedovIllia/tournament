import {bindActionCreators, Dispatch} from "redux";
import {handleLoginAction} from "store/domains/auth/action";
import {connect} from "react-redux";
import {Greeting} from "./Greeting";

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  handleLoginAction
}, dispatch);

export default connect(null, mapDispatchToProps)(Greeting);
