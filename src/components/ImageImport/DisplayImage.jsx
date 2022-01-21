import React, { Component } from "react";

class DisplayImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };

    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img),
      });
    }
  }

  onImageRemove = () => {
    this.setState({
      image: null,
    });
  };

  render() {
    return (
      <div>
        <img
          className="max-w-fit"
          id="image-upload"
          src={this.state.image}
          alt={this.state.image}
        />
        <div className="flex flex-col">
          <input
            className="text-xs bg-black border border-darkgrey rounded"
            id="image-input"
            type="file"
            name="myImage"
            onChange={this.onImageChange}
          />
          <input
            className="text-xs bg-black border border-darkgrey rounded p-1"
            value="Remove the file"
            type="submit"
            onClick={this.onImageRemove}
          />
        </div>
      </div>
    );
  }
}
export default DisplayImage;
