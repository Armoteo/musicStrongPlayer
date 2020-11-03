import MusicFiles from 'react-native-get-music-files';

export const getSongs = () => {
  MusicFiles.getAll({
    blured : true, 
    artist : true,
    duration : true, 
    cover : false, 
    genre : true,
    title : true,
    minimumSongDuration : 10000,
    fields : ['title','albumTitle','genre','lyrics','artwork','duration']
}).then(tracks => {
    // setSongsList(tracks);
    return tracks;
}).catch(error => {
    // catch the error
    console.log(error)
})
};