import '../css/style.scss';
import MakeElement from './Tools/MakeElement.js';





function RenderSite(){
	let body = document.querySelector('body');

	console.log(body);

	let bodyContainer = new MakeElement;
      bodyContainer.createEle('div','bodyContainer',[0,12,12,12],'bodyContain'); 

}

RenderSite();