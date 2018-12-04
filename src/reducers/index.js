import { combineReducers } from 'redux';

const songsReducers = () => {
  return [
    {title:  'Timber' }
  ];
};


const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === "SONG_SELECTED"){
    return action.payload;
  }

  return selectedSong;
}

export default combineReducers({
  songs: songsReducers,
  selectedSong: selectedSongReducer
});