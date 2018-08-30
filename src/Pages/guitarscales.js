import React, { Component } from 'react';
import ReactDOM from 'react';

class ScaleDis extends React.Component {
  constructor() {
    super()
  }

  render() {
    const convertNotes = this.props.convertNotes;
    const intervalName = this.props.intervalNames;
    const sharpsOrFlats = this.props.currentNotes;
    
    const convertDisplay = convertNotes.map((note,i) => {
      let conNote = sharpsOrFlats[note];
      if(i >= 8) {
        return <div key={i} className={`scaleDisNote ${intervalName[i].intClass[1]}`}> {conNote} </div>
      } else {
        return <div key={i} className={`scaleDisNote ${intervalName[i].intClass[0]}`}> {conNote} </div>
      }
    })
 
    return (
      <div className='guitarIntervalContain'>
        {convertDisplay}


      </div>
    )
  }
}



class GuitarString extends React.Component {
  constructor() {
    super() 
  }

  render() {
    const stringRoot = this.props.stringName;
    const stringScale = this.props.currentScale;
    const intNames = this.props.intervalNames;

    const fretArray = Array(25).fill(null);
    let frets = fretArray.map((fret,i) => {
      let shownNote = this.props.currentKey[(stringRoot+i)%12];
      let fretNote = (stringRoot+i)%12;


      for(let x=0;x <stringScale.length;x++) {
        if(stringScale[x] == fretNote) {

          if(x>=7) {
            return <div className={`fret${i} frets`} key={i}> <div className={`innerfret ${intNames[x].intClass[1]}`}>{shownNote} </div> </div>
          } else {
            return <div className={`fret${i} frets`} key={i}> <div className={`innerfret ${intNames[x].intClass[0]}`}>{shownNote} </div> </div>
          }
        }
      }

    return <div className={`fret${i} frets`} key={i}> <div className={`innerfret normal`}>{shownNote} </div> </div>

    })
    return (
      <div className={this.props.className}> 
        {frets}
      </div>
    );
  }
}

class GuitarTune extends React.Component {
  constructor() {
    super()

    this.changeTune = this.changeTune.bind(this);
  }

  changeTune(e,targ) {
    this.props.changeNote(e,targ);
  }

  render() {
    const musicNotes = this.props.displayNotes;
    const targetString = this.props.targetString;
    const targetVal = this.props.targetStringValue;
    const showNote = musicNotes.map((note,i) => {
  
      let noted = musicNotes[i];

      if(i == targetVal) {
        return <div className={'currentTuneNote chooseNotes'} onClick={()=>{this.changeTune(i,targetString), console.log(i)}}key={i}> {noted} </div>
      } else {
        return <div className={'chooseNotes'} onClick={()=>{this.changeTune(i,targetString)}}key={i}> {noted} </div>
      }
    });
     
    return (
      <div className='tuning-up'> 
        {showNote}

      </div>
    )
  }
}

class GuitarScale extends React.Component {
  constructor() {
    super()
    this.state = {
      sharpFlat: true,
      scaleChoose: true,
      tuningGroup: false,
      musicalNotes: {
        "sharps": ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'],
        "flats": ['A','Bb','B','C','Db','D','Eb','E','F','Gb','G','Ab'],
      },
      musicScales: [
        {'name':'Major/Ionian','scale':[0,2,4,5,7,9,11]},
        {'name':'Minor/Aeolian','scale':[0,2,3,5,7,8,10]},
        {'name':'Dorian','scale':[0,2,3,5,7,9,10]},
        {'name':'Phrygian','scale':[0,1,3,5,7,8,10]},
        {'name':'Lydian','scale':[0,2,4,6,7,9,11]},
        {'name':'Mixolydian','scale':[0,2,4,5,7,9,10]},
        {'name':'Locrian','scale':[0,1,3,5,6,8,10]},
        {'name':'Minor Pentatonic','scale':[0,3,5,7,10]},
        {'name':'Major Pentatonic','scale':[0,2,4,7,9]},
        {'name':'Minor Blues','scale':[0,3,5,6,7,10]},
        {'name':'Harmonic Minor','scale':[0,2,3,5,7,8,11]},
        {'name':'Melodic Minor','scale':[0,2,3,5,7,9,11]},
        {'name':'Diminished / 8-Tone','scale':[0,2,3,5,6,8,11]},
        {'name':'Persian','scale':[0,1,4,5,6,8,10]},
        {'name':'Hirajoshi','scale':[0,2,3,7,8]},
        {'name':'Kumoi','scale':[0,2,3,7,9]},
        {'name':'Chinese','scale':[0,4,6,7,11]},
        {'name':'Egyptian','scale':[0,2,5,7,10]},
        {'name':'Hungarian Gypsy','scale':[0,1,4,7,9]},
        {'name':'Romanian','scale':[0,2,3,6,7,9,10]},
        {'name':'Neopolitan Minor','scale':[0,1,3,5,7,8,11]},
        {'name':'Neopolitan Major','scale':[0,1,4,6,7,8,10]},
        {'name':'Prometheus','scale':[0,2,4,6,10]},
        {'name':'Ritusen','scale':[0,2,5,7,9]}
      ],
      scaleIntervals: [
        {'name':'Tonic','secName':'Octave','intClass':['tonic','octave']},
        {'name':'Minor Second','secName':'Minor Ninth','intClass':['minSec','minNin']},
        {'name':'Major Second','secName':'Major Ninth','intClass':['majSec','majNin']},
        {'name':'Minor Third','secName':'Minor Tenth','intClass':['minThird','minTen']},
        {'name':'Major Third','secName':'Major Tenth','intClass':['majThird','majTen']},
        {'name':'Perfect Fourth','secName':'Perfect 11th','intClass':['perFour','perEle']},
        {'name':'Augmented Fourth','secName':'Augmented 11th','intClass':['augFour','augEle']},
        {'name':'Perfect Fifth','secName':'Perfect 12th','intClass':['perFif','perTwe']},
        {'name':'Minor Sixth','secName':'Minor 13th','intClass':['minSix','minPBS']},  // ...PBS. Channel 13. 
        {'name':'Major Sixth','secName':'Major 13th','intClass':['majSix','majPBS']},
        {'name':'Minor Seventh','secName':'Minor 14th','intClass':['minSev','minFTeen']},
        {'name':'Major Seventh','secName':'Major 14th','intClass':['majSev','majFTeen']}  
      ],
      strings: [
        {'name': 'stringTopE','stringVal':7},
        {'name': 'stringB','stringVal':2},
        {'name': 'stringG','stringVal':10},
        {'name': 'stringD','stringVal':5},
        {'name': 'stringA','stringVal':0},
        {'name': 'stringBottomE','stringVal':7},
      ],
      altTunings: [
        {'name':'Standard','forumla':[7,2,10,5,0,7]},
        {'name':'D Tuning','forumla':[5,0,8,3,11,5]},
        {'name':'C Tuning','forumla':[3,10,6,1,8,3]},
        {'name':'B Tuning','forumla':[2,11,5,0,7,2]},
        {'name':'Full Step Down','forumla':[5,0,8,3,10,5]},
        {'name':'Minor Third','forumla':[6,3,0,9,6,3]},
        {'name':'All Fourths','forumla':[7,3,8,5,0,8]},
        {'name':'Major Sixth','forumla':[0,3,6,9,0,3]},
        {'name':'Open A','forumla':[7,0,7,4,0,7]},
        {'name':'Open B','forumla':[6,2,9,2,9,2]},
        {'name':'Open C','forumla':[7,3,10,3,10,3]},
        {'name':'Open D','forumla':[5,0,9,5,0,5]},
        {'name':'DADDAD','forumla':[5,0,5,5,0,5]},
        {'name':'Cello/Standard','forumla':[7,2,0,5,11,7]},
        {'name':'Hot Type','forumla':[5,0,9,7,2,0]},
        {'name':'Augmented Fourths','forumla':[9,3,9,3,9,3]}
      ],
      currentScale: null,
      currentRoot: null,
      currentIntervals: null,
      currentConvertScale: null,
      currentScaleIndex: 0,
      currentTuneIndex: 0,
    
    }

    this.changeStringRoot = this.changeStringRoot.bind(this);
    this.changeScaleRoot = this.changeScaleRoot.bind(this);
    this.changeGroupTuning = this.changeGroupTuning.bind(this);
  }
  
  changeStringRoot(i,stringName) {
    const nameString = stringName;
    const noteSelect = i;
    const strings = this.state.strings.slice(); 
    strings[stringName].stringVal = noteSelect;
    
    this.setState({strings: strings});

  }

  componentWillMount() {
    const defaultRoot = 3;
    const defaultScale =  this.state.musicScales[0];
    
    this.defaultScaled = this.getScaleNotes(defaultRoot, defaultScale);
    this.setState({
      currentRoot: defaultRoot,
      sharpFlat: true,
    })
  }

  changeScaleRoot(i,targe) {
    this.getScaleNotes(i,this.state.currentScale);
    console.log(i,targe);
    this.setState({
      currentRoot: i,
    })
  }
  

  getScaleNotes(rot, scale) {
    const convertedNotes = [];
    const convertedIntervals = [];
    const scaleFormula = scale.scale;
    const changedNotes = scaleFormula.map((note,i) => {
      let convert = (note+rot)%12;
      for(let x=0;x<this.state.scaleIntervals.length;x++) {
        if(note%8 == x) {
          convertedIntervals.push(this.state.scaleIntervals[note]);
        }
      }
      convertedNotes.push(convert);
    });

    this.setState({
      currentScale: scale,
      currentIntervals: convertedIntervals,
      currentConvertScale: convertedNotes,
    })
  }
  
  changeGroupTuning(tuned,i) {
    
    const strings = this.state.strings.slice();
    let diffStrings = strings;
    const diffString = strings.map((strin,a) => {
      console.log(strings[a]);
      diffStrings[a].stringVal = tuned.forumla[a];
    })
    console.log(diffString);
   
    this.setState({
      strings: diffStrings,
      currentTuneIndex: i,
    })
    

  }

  render() {

    const strings = this.state.strings;
    const musicScales = this.state.musicScales;
    const musicNotes = this.state.musicalNotes;
    let sharpFlats = this.state.sharpFlat;
    let notes = sharpFlats ? musicNotes.sharps : musicNotes.flats;
    let scaledNotes = this.state.currentscale ? this.state.currentScale : this.state.musicScales[0].scale;
    let currentScaled = this.state.currentScale ? this.state.currentScale : {'name':'Minor/Aeolian','scale':[0,2,3,5,7,8,10]};
    let currentRooted = this.state.currentRoot;
    let convertedNotes = this.state.currentConvertScale;
    let interNames = this.state.currentIntervals;
    let altTunes = this.state.altTunings;

    let altTuner = altTunes.map((tuning,i) => {
      if(i == this.state.currentTuneIndex) {
          return <div className='altTunes choseAltTunes' key={i} onClick={()=>{this.changeGroupTuning(tuning,i)}}> {tuning.name}</div>
      } else {
          return <div className='altTunes' key={i} onClick={()=>{this.changeGroupTuning(tuning,i)}}> {tuning.name}</div>
      }
    });
    
    let scalesChanges = musicScales.map((scal,i) => {
      if(this.state.currentScaleIndex == i ) {
        return (
          <div className='scale-select-item activescale' key={i} onClick={() => { this.getScaleNotes(currentRooted, scal), this.setState({currentScaleIndex: i})}}> {scal.name}</div>
        )
      } else {
        return (
          <div className='scale-select-item' key={i} onClick={() => { this.getScaleNotes(currentRooted, scal), this.setState({currentScaleIndex: i})}}> {scal.name}</div>
        )
      }
    })

    let displayedScales = 
            <div className='display-scale'> 
              <div className='current-scale-name'> Current Scale: <div className='scaleRoot'>{notes[currentRooted]}</div>  <div className='scaleName'>{currentScaled.name}</div></div>   
              <ScaleDis 
                currentScale={currentScaled} 
                currentNotes={notes} 
                convertNotes={convertedNotes} 
                intervalNames={interNames}> 

              </ScaleDis>
        

            </div>;
      
    
    let scaleSelections =   <div className='choose-scale'>
                              <div className='scale-selection'>
                                      <div className='root-selection'> 
                                       <GuitarTune 
                                          targetStringValue={currentRooted} 
                                          changeNote={this.changeScaleRoot}  
                                          targetString={'currentRoot'} 
                                          displayNotes={notes}> 
                                        </GuitarTune>


                                      </div>
                                      <div className='scales'> 
                                        {scalesChanges}
                                      </div>

                                  </div>

                          </div>;

    let chooseStrings = <div className='guitar-tune'>
                          
                          <GuitarTune 
                          targetStringValue={this.state.strings[0].stringVal}  
                          changeNote={this.changeStringRoot}
                          targetString={0} 
                          displayNotes={notes}> 
                          </GuitarTune>           
                          <GuitarTune 
                          targetStringValue={this.state.strings[1].stringVal} 
                          changeNote={this.changeStringRoot}  
                          targetString={1} 
                          displayNotes={notes}> 
                          </GuitarTune>
                          <GuitarTune 
                          targetStringValue={this.state.strings[2].stringVal} 
                          changeNote={this.changeStringRoot}  
                          targetString={2} 
                          displayNotes={notes}> 
                          </GuitarTune>
                          <GuitarTune 
                          targetStringValue={this.state.strings[3].stringVal} 
                          changeNote={this.changeStringRoot} 
                          targetString={3} 
                          displayNotes={notes}> 
                          </GuitarTune>
                          <GuitarTune 
                          targetStringValue={this.state.strings[4].stringVal} 
                          changeNote={this.changeStringRoot} 
                          targetString={4} 
                          displayNotes={notes}> 
                          </GuitarTune>
                          <GuitarTune 
                          targetStringValue={this.state.strings[5].stringVal} 
                          changeNote={this.changeStringRoot}  
                          targetString={5} 
                          displayNotes={notes}> 
                          </GuitarTune>

                        </div>;




    let scaleDisplayChange = this.state.scaleChoose ? scaleSelections : displayedScales;

    return (
      <div> 
        <div className='guitar-controls'> 
          <div className={'current-tune'}> 

            <div className='stringDisplay stringTopE'>Top string is currently on {notes[this.state.strings[0].stringVal]}</div>  
            <div className='stringDisplay stringB'>Second string is currently on {notes[this.state.strings[1].stringVal]}</div>                
            <div className='stringDisplay stringG'>Third string is currently on {notes[this.state.strings[2].stringVal]}</div>  
            <div className='stringDisplay stringD'>Fourth string is currently on {notes[this.state.strings[3].stringVal]}</div>  
            <div className='stringDisplay stringA'>Fifth string is currently on {notes[this.state.strings[4].stringVal]}</div>  
            <div className='stringDisplay stringBottomE'>Bottom string is currently on {notes[this.state.strings[5].stringVal]}</div>    


            <div className='sharpChanges'> 
              <div className={ sharpFlats ? 'activeSharp' : 'notActive' } onClick={() => {this.setState({sharpFlat: true})}}> Sharps </div>
              <div className={ sharpFlats ? 'notActive' : 'activeSharp' } onClick={() => {this.setState({sharpFlat: false})}}> Flats </div>
              

            </div>



          </div>
          <div className='guitar-control-switch'> 
            {chooseStrings}

            <div className='guitar-fixed-tunes'>
            {altTuner}

            </div>

          </div>  

          <div className='guitar-scaleDisplay'>
            <div className='display-scale'> 
                <div className='current-scale-name'> Current Scale: <div className='scaleRoot'>{notes[currentRooted]}</div>  <div className='scaleName'>{currentScaled.name}</div></div>   
                <ScaleDis 
                  currentScale={currentScaled} 
                  currentNotes={notes} 
                  convertNotes={convertedNotes} 
                  intervalNames={interNames}> 

                </ScaleDis>
          

              </div>              


              <div className='choose-scale'>
                              <div className='scale-selection'>
                                      <div className='root-selection'> 
                                       <GuitarTune 
                                          targetStringValue={currentRooted} 
                                          changeNote={this.changeScaleRoot}  
                                          targetString={'currentRoot'} 
                                          displayNotes={notes}> 
                                        </GuitarTune>


                                      </div>
                                      <div className='scales'> 
                                        {scalesChanges}
                                      </div>

                                  </div>

                          </div>

            </div>
          
        </div>

      

          <div className='guitar-scales'>  

            <GuitarString className={'strings stringTopE'}
                stringName={this.state.strings[0].stringVal}
                currentScale={convertedNotes} 
                currentKey={notes}
                intervalNames={interNames}
                >
            </GuitarString>
            <GuitarString className={'strings stringB'}
                stringName={this.state.strings[1].stringVal}
                currentScale={convertedNotes} 
                currentKey={notes}
                intervalNames={interNames}
                >
            </GuitarString>
            <GuitarString className={'strings stringG'}
                stringName={this.state.strings[2].stringVal}
                currentScale={convertedNotes} 
                currentKey={notes}
                intervalNames={interNames}
                >
            </GuitarString>
            <GuitarString className={'strings stringD'}
                stringName={this.state.strings[3].stringVal}
                currentScale={convertedNotes} 
                currentKey={notes}
                intervalNames={interNames}
                >
            </GuitarString>
            <GuitarString className={'strings stringA'}
                stringName={this.state.strings[4].stringVal}
                currentScale={convertedNotes} 
                currentKey={notes}
                intervalNames={interNames} 
                >
            </GuitarString>
            <GuitarString className={'strings stringBottomE'}
                stringName={this.state.strings[5].stringVal}
                currentScale={convertedNotes} 
                currentKey={notes}
                intervalNames={interNames}
                >
            </GuitarString>
          </div>
      </div>
    ); 
  }
}


export default GuitarScale;