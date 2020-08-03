import React from 'react';
import Wheel from './Wheel';
import Screen from './Screen';
import Game from './game/Game';
import Music from './music/Music';
import Setting from './setting/Setting';
import Home from './Home';
import ZingTouch from 'zingtouch';


class App extends React.Component {

  constructor(){
    super()

    // to manage state
    this.state={
      showHome:false,
      showMusic:false,
      showGame:false,
      showSetting:false,
      showComponent:false,

      showMusicComponent:false
    }

  }

    // to handle the wheel rotation
    handleMovement = (e) => {
      console.log('state',this.state);

      // to check the angle
      const scope = this;
      var angle = 0;
      var region = new ZingTouch.Region(e.target);
      region.bind(e.target , 'rotate',function(e){
        // console.log('last distance detail', e.detail.distanceFromLast);
        // console.log('rotaion details' , e.detail.distanceFromOrigin);
        angle = e.detail.distanceFromOrigin;

        //Making Home Active
        if(angle>0 && angle<85){
          console.log('setting home as active')
          scope.setState({
            showHome:true,
            showMusic:false
          })
        }
        //marking music Active
        else if(angle>85 && angle<170){
          console.log('setting music as active')
          scope.setState({
            showMusic:true,
            showHome:false,
            showGame:false,
            showSetting:false
          })
        }
        //Marking Game Active
        else if(angle>170 && angle<265){
          console.log('setting music as active')
          scope.setState({
            showMusic:false,
            showHome:false,
            showGame: true,
            showSetting:false
          })
        }
        // Marking Setting Active
        else if(angle>264 && angle<360){
          console.log('setting music as active')
          scope.setState({
            showMusic:false,
            showHome:false,
            showGame: false,
            showSetting:true
          })
        }
        // Moving in the anti clockwise direction
        if(angle>-90 && angle<0){
          scope.setState({
            showHome:false,
            showSetting:true,
            showGame:false,
            showMusic:false
          });
        }
        else if(angle>-168 && angle<-90){
          scope.setState({
            showGame:true,
            showSetting:false,
            showMusic:false,
            showHome:false
          });
        }
        else if (angle>-271 && angle<-168){
          scope.setState({showGame:false,showHome:false,showMusic:true,showSetting:false});
        }
        else if (angle>-340 && angle<-271)
        {
          scope.setState({showSetting:false,showHome:true,showMusic:false,showGame:false});
        }
      });
    }

    // to handle menuclick
    handleMenuClick = () => {
      this.setState({
        showComponent:false
      })
    }
    // to handle the enter click
    handleClick = () => {
      this.setState ( {
        showComponent:true,
      })
    }
  render() {
    const { showComponent , showGame , showHome , showMusic , showSetting} = this.state
    return (
      <div >
    
        {
          showComponent?showHome?<Home handleMenuClick={this.handleMenuClick}/> 
          :showMusic?<Music  handleMenuClick={this.handleMenuClick}/> 
          :showGame? <Game handleMenuClick={this.handleMenuClick}/> 
          :<Setting  handleMenuClick={this.handleMenuClick}/>
          :<Screen // this is for rendering the screen component
            showComponent = { showComponent  }
            showHome = { showHome }
            showGame ={ showGame }
            showMusic = { showMusic }
            showSetting = {showSetting}
          />
        }
        <Wheel // this is for rendering the wheel component
            handleMovement={this.handleMovement}
            handleMenuClick={this.handleMenuClick}
            handleClick={this.handleClick}
        />
      </div>
    );
  }
}


export default App;
