import * as types from './actionTypes.js';

export const userChanged = id => ({
  type: types.USER_CHANGED,
  payload: {
    id
  }
});
export const instrumentUpdated = instrument => ({
  type: types.INSTRUMENT_UPDATED,
  payload: {
    instrument
  }
});
export const difficultyUpdated = instrument => ({
  type: types.DIFFICULTY_UPDATED,
  payload: {
    difficulty
  }
});
export const songChoicesAdded = songs => ({
  type: types.SONG_CHOICES_ADDED,
  payload: {
    songs
  }
});
export const songChoicesUpdated = songs => ({
  type: types.SONG_CHOICES_UPDATED,
  payload: {
    songs
  }
});
export const songAdded = song => ({
  type: types.SONG_ADDED,
  payload: {
    song
  }
});
export const songRemoved = song => ({
  type: types.SONG_REMOVED,
  payload: {
    song
  }
});
export const songCompleted = song => ({
  type: types.SONG_COMPLETED,
  payload: {
    song
  }
});
export const notesAdded = (song, notes) => ({
  type: types.NOTES_ADDED,
  payload: {
    song: song,
    notes: notes
  }
});