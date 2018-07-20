import React, { Component } from 'react';
import '../../css/profile.css';
import placeholder from '../../images/placeholder.png';
import ModalImage from './ModalImage';

class Profile extends Component {
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
      <div className="row" >
        <div className="col-sm-3 profilewell">
          <div className="well">
            <div className="image-upload text-center">
              <label htmlFor="file-input">
                <img src={placeholder} className="img-rounded img-responsive" alt="" />
              </label>
              <input id="file-input" type="file" accept="image/*" onChange={this.handleImageChange} />
            </div>
          </div>
          <div className="well text-center">
            <p>Social Sites</p>
            <p>
              <a href="http://indiatoday.intoday.in"><span className="label label-default">News</span></a>
              <a href="https://www.facebook.com/login"><span className="label label-primary">Facebook</span></a>
              <a href="https://www.w3schools.com"><span className="label label-success">W3Schools</span></a>
            </p>
          </div>
        </div>
      </div>

    );
  }
}

export default Profile;
