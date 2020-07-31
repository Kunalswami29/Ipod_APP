import React from "react";
class Screen extends React.Component {
  render() {
    return (
      <div className="screen-container">
          <div className="list-box">
                <p className='title'>Ipod.js</p>
                <div className='card-list' onChange={this.handlechange}>
                    Home
                </div>
                <div className='card-list'>
                    Music
                </div>
                <div className='card-list'>
                    Game
                </div>
                <div className='card-list'>
                    Settings
                </div>
          </div>
      </div>
    );
  }
}

export default Screen;
