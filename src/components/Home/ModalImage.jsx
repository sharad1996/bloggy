import React, { Component } from 'react';
import '../../css/modalImage.css';
import placeholder from '../../images/placeholder.png';

class ModalImage extends Component {
  constructor(props) {
    super(props);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleImageChange (e) {
    debugger;
    e.preventDefault();
    let file = e.target.files[0];
    this.props.handleProfileImage(file);
  }

  render() {
    return (
      <div>
        <div className="modal" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="text-center">Upload Your Profile Picture</h4>
              </div>
              <div className="modal-body">
                <div className="image-upload text-center">
                  <label htmlFor="file-input">
                    <img src={placeholder} className="img-responsive" alt="" />
                  </label>
                  <input id="file-input" type="file" accept="image/*" onChange={this.handleImageChange} />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalImage;

