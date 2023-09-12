import * as types from './actionTypes';

const initialState = {
  authUser: null,
  signedIn: false,
  signInOpen: false,
  createOpen: false,
  landingOpen: true,
  email: null,
  password: null,
  newEmail: null,
  newPassword: null,
  songs: [],
  choices: [],
  artist: null,
  notes: '',
  draft: '',
  draftOpen: false
};

export default function reducer(state = initialState, action) {
  if (action.type === types.SONG_CHOICES_UPDATED) {
    return {
      ...state,
      choices: action.payload.choices,
      artist: actio.payload.artist,
    };
  } else if (action.type === types.SONG_ADDED) {
    return {
      ...state,
      songs: [...state.songs, action.payload.song],
    };
  } else if (action.type === types.SONG_REMOVED) {
    return {
      ...state,
      songs: state.songs.filter((song) =>
        song !== action.payload.song
      ),
    };
  } else if (action.type === types.SONG_COMPLETED) {
    return {
      ...state,
      songs: state.songs.map((song) =>
        song === action.payload.song ? {...song, completed: !song.completed} : song
      ),
    };
  } else if (action.type === types.NOTES_UPDATED) {
    return {
      ...state,
      songs: state.songs.map((song) =>
        song === action.payload.song ? {...song, notes: action.payload.notes} : song
      ),
    };
  } else {
    return state;
  }
}