import React from 'react'
import './App.css';

import CanvasComponent from './components/Canvas'
import Html2CanvasComponent from './components/Html2Canvas'
import DomToImageComponent from './components/DomToImage'
import PuppeteerComponent from './components/Puppeteer'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h2 className="App-header">生成海报图方案</h2>
  
        <h3>canvas绘制</h3>
        <CanvasComponent />

        <h3>html2canvas</h3>
        <Html2CanvasComponent />

        <h3>DomToImage</h3>
        <DomToImageComponent />

        <h3>puppeteer</h3>
        <PuppeteerComponent />
      </div>
    );
  }
}

export default App;
