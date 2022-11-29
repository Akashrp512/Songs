//Action creator
const selectSong = (song) =>{

    //Return an action
    return {
     type: 'SONG-SELECTED',
     payload: song
    };
};

export default selectSong;