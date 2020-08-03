import React from "react";
import MusicScreen from './MusicScreen';
import Playlist from './Playlist';
import Song from './Song';
import Artist from './Artist';
import Wheel from '../Wheel';
import ZingTouch from 'zingtouch';



class Music extends React.Component {
  constructor(){
    super()
    // managing the state for music
    this.state={
      showSong:false,
      showPlaylist:false,
      showMusicComponent:false,
      showArtists:false
    }
  }
  // to handle the movements
  handleMovement= (e) => {
     // to check the angle
    const scope = this;
    var angle = 0; // setting the inital angle value
    var region = new ZingTouch.Region(e.target); // seting the region to rotate
    region.bind(e.target , 'rotate',function(e){
      console.log('prev distance detail', e.detail.distanceFromLast);
      console.log('rotaion details' , e.detail.distanceFromOrigin);
      angle = e.detail.distanceFromOrigin;

      // Marking Artist active
      if(angle>0 && angle<110){
        scope.setState({
          showArtists:true
        });
      }
      // Marking Song active
      else if(angle>110 && angle<270){
        scope.setState({
          showArtists:false,
          showSong:true
        });
      }
      //markin Playlist active
      else if(angle>270 && angle<330){
        scope.setState({
          showArtists:false,
          showSong:false,
          showPlaylist:true
        });
      }
      // Moving in the anti clockwise direction
      if(angle>-150 && angle<0){
        scope.setState({
          showArtists:false,
          showPlaylist:true,
          showSong:false,
        });
      }
      if(angle>-168 && angle<-90){
        scope.setState({
          showArtists:false,
          showPlaylist:false,
          showSong:true,
        });
      }
      else if (angle>-290 && angle<-168){
        scope.setState({showArtists:true,showSong:false,showPlaylist:false});
      }

    });

  }
  // function to handle enter click
  handleClick= () =>{
      this.setState({showMusicComponent:true});
  }

  //function to handle menu click
  handleMenuClick=()=>{  
      const{showMusicComponent}=this.state;
      const {handleMenuClick}=this.props;
      if(!showMusicComponent) handleMenuClick();
      else
      this.setState({showMusicComponent:false});
  }
  render() {
    const { showMusicComponent,showArtists,showPlaylist,showSong }=this.state
    return (
      // this is to manage the music componenet
      <div>
        { showMusicComponent?showArtists?<Artist /> 
          :showSong?<Song /> 
          :<Playlist/>
          :<MusicScreen 
            showPlaylist= {showPlaylist}
            showSong ={showSong}
            showArtists = { showArtists }
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

export default Music;
