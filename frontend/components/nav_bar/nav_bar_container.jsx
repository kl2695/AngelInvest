import { connect } from "react-redux";
import NavBar from './nav_bar';
import { login, logout, signup } from "../../actions/session_actions";


const mapStateToProps = state => ({
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);