import { connect } from 'react-redux';
import { userLoginRequest } from '../actions/usersActions';
import Login from '../components/Login/Login';

const mapStateToProps = state => ({
  token: state.User.token,
  message: state.User.message
})

const mapDispatchToProps = dispatch => ({
  userLoginRequest: (userData) => {
    dispatch(userLoginRequest(userData))
  }

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
