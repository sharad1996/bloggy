import { connect } from 'react-redux';
import { setShowModal, handleProfileImage } from '../actions/profileActions';
import Profile from '../components/Home/Profile';

const mapStateToProps = state => ({
  showModal: state.Profile.showModal,
  file: state.Profile.file,
})

const mapDispatchToProps = dispatch => ({
  setShowModal: (showModal) => {
    dispatch(setShowModal(showModal))
  },
  handleProfileImage: (file) => {
    dispatch(handleProfileImage(file))
  },

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
