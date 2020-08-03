import React from "react";


class Screen extends React.Component {
  render() {
    const { showSetting ,showMusic ,showHome ,showGame } = this.props    // rendering the props
    return (
      // this is the screen and the list container
      <div className="screen-container"> 
          <div className="list-box">
                <p className='title'>Ipod.js</p>
                <div className={`wheel-list ${showHome ?'active':''}`} >
                    Home
                </div>
                <div className={`wheel-list ${showMusic ?'active':''}`}>
                    Music
                </div>
                <div className={`wheel-list ${showGame ?'active':''}`}>
                    Game
                </div>
                <div className={`wheel-list ${showSetting ?'active':''}`}>
                    Settings
                </div>
          </div>
      </div>
    );
  }
}

export default Screen;
