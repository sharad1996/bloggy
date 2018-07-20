import { connect } from 'react-redux';
import { userSignUpRequest } from '../actions/usersActions';
import Registration from '../components/Login/Registration';

const mapStateToProps = state => ({
  message: state.User.message
})

const mapDispatchToProps = dispatch => ({
  userSignUpRequest: (userData) => {
    dispatch(userSignUpRequest(userData))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration)
