import React from "react";
import html2canvas from 'html2canvas'

export default class Html2CanvasComponent extends React.Component {

  constructor() {
    super()
    this.rect = React.createRef()
  }

  handleSaveImage() {

    html2canvas(this.rect.current, {
      width: 200,
      height: 200, 
      allowTaint: true,
      scrollY: -window.scrollY, 
      scrollX: 0,
    }).then((canvas) => {
      const imgUrl = canvas.toDataURL("image/png")

      const blob = new Blob([''], { type: 'application/octet-stream' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = imgUrl
      a.download = imgUrl.replace(/(.*\/)*([^.]+.*)/ig,"$2").split("?")[0]
      const e = document.createEvent('MouseEvents')
      e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      a.dispatchEvent(e);
      URL.revokeObjectURL(url)
  });
  }

  render() {
    return <div className="html-to-canvas">
      <div ref={this.rect} style={{ width: 200, height: 200, backgroundColor: 'gray' }}></div>
      <button onClick={() => this.handleSaveImage()}>保存图片</button>
    </div>
  }
}