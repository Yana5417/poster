import React from "react";
import domtoimage from 'dom-to-image'

export default class DomToImageComponent extends React.Component {

  constructor() {
    super()
    this.rect = React.createRef()
  }

  handleSaveImage() {
    domtoimage.toJpeg(this.rect.current, { quality: 0.95 })
    .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    });
  }

  render() {
    return <div className="dom-to-image">
      <div ref={this.rect} style={{ width: 200, height: 200, background: 'orange' }}></div>
      <button onClick={() => this.handleSaveImage()}>保存图片</button>
    </div>
  }
}