import React from 'react';

class Wheel extends React.Component{

    // to handle wheel rotation
    handleWheelClick =(e) => {
        const { handleMovement } = this.props;
        handleMovement(e);
    }
    // to handle enter 
    handleEnterClick = () => {
        const { handleClick } = this.props;
        handleClick();
    }
    // to handle Menu click
    handleMenuClick = () => {
        const { handleMenuClick } = this.props;
        handleMenuClick();
    }


    render(){
        // const {
        //     showMusic, 
        //     showHome, 
        //     showSetting ,
        //     showGame
        // } = this.props;
        return (
            // this is the wheel part
            <div className="Wheel-box">
            <div className="wheel-outerring" onClick= { this.handleWheelClick }>    
                <div className="wheel-innerring" onClick = { this.handleEnterClick }></div>
                    <div className="Menu" onClick={ this.handleMenuClick }>Menu</div>
                    <img className="action-next" src="https://image.flaticon.com/icons/svg/854/854184.svg" alt="next-btn" /> 
                    <img className="action-back" src="https://image.flaticon.com/icons/svg/2413/2413362.svg" alt="back-btn"/>
                    <img className="action-play"src="https://image.flaticon.com/icons/svg/1792/1792864.svg" alt="start/pause"/>
            </div>
            </div>
        );
    }
}




export default Wheel;
