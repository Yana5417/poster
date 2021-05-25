import React from "react";

export default class CanvasComponent extends React.Component {
  constructor() {
    super()
    this.canvas = React.createRef()
  }

  componentDidMount() {
    const canvas = this.canvas.current
    if (canvas && canvas.getContext) this.drawRect(canvas)
  }

  drawRect(canvas) {
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = 'pink'
    ctx.fillRect(0, 0, 200, 200)
  }

  saveImage() {
    const canvas = this.canvas.current
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
  }

  render() {
    return <div className="canvas-component">
      <canvas ref={this.canvas} width="200" height="200">
        您的浏览器不支持canvas，请更换浏览器
      </canvas>

      <button onClick={() => this.saveImage()}>保存图片</button>
    </div>
  }
}