
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import GroupIndex from './group_index';
import { requestAllGroups } from "../../../actions/group_actions";
import { selectAllGroups } from "../../../reducers/selectors";


const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    errors: state.errors.groups, 
    groups: selectAllGroups(state)
});

const mapDispatchToProps = dispatch => {

    return {
        requestAllGroups: () => dispatch(requestAllGroups())
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupIndex));