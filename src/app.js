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

class App extends React.Component {
  render() {
    return (
       <div className='bodyContain'>
        <GuitarScale></GuitarScale>
      </div>
      )
  }
}

const mountNode = document.getElementById("app");
ReactDOM.render(<App name="Oscar" />, mountNode);