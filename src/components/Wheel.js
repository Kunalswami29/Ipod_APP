import React from 'react';


class Wheel extends React.Component{

    render(){
        return (
            <div className="Wheel-box">
            <div className="wheel-outerring">
                <div className="wheel-innerring">
                    <div className="Menu">Menu</div>
                    <img className="action-next" src="https://image.flaticon.com/icons/svg/854/854184.svg" alt="next-btn" />
                    <img className="action-back" src="https://image.flaticon.com/icons/svg/2413/2413362.svg" alt="back-btn"/>
                    <img className="action-play"src="https://image.flaticon.com/icons/svg/1792/1792864.svg" alt="start/pause"/>
                </div>

            </div>
            </div>
        );
    }
  
}




export default Wheel;
