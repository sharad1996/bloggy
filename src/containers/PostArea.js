import { connect } from 'react-redux';
import { postRequest, loadPosts, setShow } from '../actions/postsActions';
import PostArea from '../components/Home/PostArea';

const mapStateToProps = state => ({
  posts: state.Posts.posts,
  show: state.Posts.show,
})

const mapDispatchToProps = dispatch => ({
  postRequest: (postData) => {
    dispatch(postRequest(postData))
  },
  loadPosts: (posts) => {
    dispatch(loadPosts(posts))
  },
  setShow : (show) => {
    dispatch(setShow(show))
  },

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostArea)
