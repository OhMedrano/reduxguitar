import React, { Component } from 'react';
import ReactDOM from 'react';


class GuitarHarm extends React.Component {
  render() {
    const currentWidth = {
      width: this.props.fretStart +'%',
      borderRight: '3px solid red',
    }
    const ratioVal = this.props.ratio.ratioVal;
    const ratioBlocks = Array(ratioVal - 1).fill(null);
    
    const rateBlocks = ratioBlocks.map((blk, i) => {
      return <div className={`scaled_${this.props.ratio.name} scaled`}> </div>
    })
    return (
        <div className='guitar-body'>
            
            <div className='guitar-scale-length hidden-small '> 
              <div className={`initial-scale-length`} style={{height: '100%', width: this.props.fretStart+'%'}}>

                {rateBlocks}

               </div>
                  

            </div> 
            <div className='guitar-scale-length hidden-desktop '> 
              <div className={`initial-scale-length`} style={{height: '100%', width: '100%', marginTop: (this.props.fretStart + 3)+'%'}}>

                {rateBlocks}

               </div>
                  

            </div> 

        

          </div>

      )
  }
}



class HarmVis extends React.Component {
  constructor() {
    super()
    this.state = {
      ratios: [
        {'name':'Half','ratioVal':2},
        {'name':'Third','ratioVal':3},
        {'name':'Quarter','ratioVal':4},
        {'name':'Fifth','ratioVal':5},
      ],
      fretVals: [
                  100,
                  97,
                  91,
                  86.5,
                  81.5,
                  77,
                  73,
                  68.5,
                  64,
                  61,
                  58,
                  55,
                  51.5,
                  49,
                  46,
                  43,
                  41,
                  39,
                  37,
                  35,
                  33,
                  31
      ],
      currentRatio: 0,
      currentFretIndex: 0,
      fretChangeDisplay: false,
    }
  }
  render() {
    console.log(this.state);
    
    const currentRat = this.state.ratios[this.state.currentRatio];
    let currentFret = () => {
      if(this.state.currentFretIndex == 0) {
        console.log('true');
        return 'Open';
      } else {
        return this.state.currentFretIndex;
      }
    };
    let currentFretVal = this.state.fretVals[this.state.currentFretIndex];
    let clickedFretChange = this.state.fretChangeDisplay; 
    const changeRatio = this.state.ratios.map((ratio, i) => {
      if(i == this.state.currentRatio) {
        return <div className={`activeRatio ratios-option active_${ratio.name}`} key={i} onClick={() => {this.setState({ currentRatio: i})}}> {ratio.name} </div>
      } else {
        return <div className='ratios-option' key={i} onClick={() => {this.setState({ currentRatio: i})}}> {ratio.name} </div> 
      }
    })
    
    const changeFret = this.state.fretVals.map((fret, i) => {
      if(i == this.state.currentFretIndex) {
        return <div className='activeFret fret-option'key={i}  onClick={() => {this.setState({currentFretIndex: i, fretChangeDisplay: false}) }}> { i } </div>
      } else {
       return <div className='fret-option ' key={i} onClick={() => {this.setState({currentFretIndex: i, fretChangeDisplay: false})}}> { i } </div>        
      }
    })

    console.log(currentFret());

    return (
      <div className={this.props.classNames}> 
        <div className='instructions'>
            <div className='instruct-title'> 
                How this works: 
              </div>  

            <div className='instruct-content'> 
              <div className='intro-content'>
              This tool shows guitarist where to hit for their pinch harmonics. 
              
      

              If you don't know what Pinch Harmonics or Harmonics on a guitar is, 
              please take a look at <br/><a href='https://www.youtube.com/watch?v=5I5O8P-r5Rk'> this youtube lesson from Justin Guitar* </a> 

               <br/>     
              <div className='disclaimer'>*NO WAY AFFLIATED WITH JUSTIN GUITAR</div>


              </div>
              <br/>
              <div className='actual-instructions'>
                Just pick a ratio value, and which fret you want to start on.
              <br/>
                The lines that pop up between the guitar's bridge and nut, are the areas where the pinch harmonics rest. 
                <br/>
                Pick at that suggested area on your guitar to make that guitar squeal.
              </div>
            </div> 

        </div>
        <div className='controls'>
            <div className='ratio-change'>
              <div className='ratio-title control-titles'> Choose Ratio: </div>
              <div className='ratio-options'> 
                {changeRatio}
          
              </div>
            </div>
            <div className='fret-change'>
              <div className='fret-title control-titles'> Choose Base Fret: </div>
              <div className='fret-options'> 
                <div className='current-fret' onClick={() => {this.setState({ fretChangeDisplay: true})}}> On Fret {} </div>
                <div className={`${clickedFretChange ? 'active-change-fret' : 'not-active-change-fret'} fretChange`}> 
                  {changeFret}
                </div>
              </div>
            </div>
        
        </div>
        <div className='guitar'>
          <GuitarHarm ratio={currentRat} fretStart={currentFretVal}/>

        </div>


      </div>
    )
  }
}

export default HarmVis;