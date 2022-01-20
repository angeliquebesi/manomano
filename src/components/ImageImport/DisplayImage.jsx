import React, { Component } from "react";

class DisplayImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };

    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img),
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <img
              id="image-upload"
              src={this.state.image}
              alt={this.state.image}
            />
            <input
              id="image-input"
              type="file"
              name="myImage"
              onChange={this.onImageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default DisplayImage;
