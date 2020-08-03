import React from "react";


class MusicScreen extends React.Component {
    render() {
        const { showArtists, showSong ,showPlaylist } = this.props // rendering the props
        return (
            // this is the MusicScreen and the list container
            <div className="screen-container"> 
                <div className="list-box">
                    <p className='title'>Music</p>
                    <div className={`wheel-list ${showArtists?'active':''}`} >
                        Artists
                    </div>
                    <div className={`wheel-list ${showSong ?'active':''}`}>
                        Songs
                    </div>
                    <div className={`wheel-list ${showPlaylist ?'active':''}`}>
                        Playlist
                    </div>
            </div>
        </div>
        );
    }
}


export default MusicScreen;
