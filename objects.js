let playlist = {
  artistName: 'songTitle'
};
 function updatePlaylist(playlist, artistName, songTitle){
   playlist.songTitle;
   return playlist;
 }
 function removeFromPlaylist(playlist, artistName){
   delete playlist.artistName;
   return playlist;
 }