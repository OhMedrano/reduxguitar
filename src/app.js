/*import '../css/style.scss';
import MakeElement from './Tools/MakeElement.js';





function RenderSite(){
	let body = document.querySelector('body');

	console.log(body);

  let makeEle = new MakeElement;

	let bodyContainer = makeEle.createEle('div','bodyContainer',[12,12,12,12],'bodyContain');  
      bodyContainer.innerHTML = `<div> Hey, Welcome to PureJS </div>`;

  
  body.append(bodyContainer);
}

RenderSite(); 
*/



import '../css/style.scss';
import React from "react";
import ReactDOM from "react-dom";
import GuitarScale from './Pages/guitarscales.js';
import HarmVis from './Pages/harmview.js';
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      toolIndex: 1,
      guitarTools: [
        'Guitar Scales',
        'Harmonic Visualizer'
      ],
    }
  }
  render() {
    const toolCurrentIndex = this.state.toolIndex;
    const toolsArray = [
      <GuitarScale classNames='GuitarScale bodyItem col-xs-12 col-sm-12 col-md-12 col-lg-12'></GuitarScale>,
      <HarmVis classNames='HarmVis bodyItem col-xs-12 col-sm-12 col-md-12 col-lg-12'></HarmVis>,
    ];
    return (
       <div className='bodyContain col-xs-12 col-sm-12 col-md-12 col-lg-12'>
        <div className='guitar-tools-header col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <div className='guitar-tools-headText'>  Guitar Tools... </div> 



        </div>

        {toolsArray[toolCurrentIndex]}
      </div>
      )
  }
}

const mountNode = document.getElementById("app");
ReactDOM.render(<App name="Oscar" />, mountNode);