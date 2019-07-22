var playlist = {} 
playlist[artistName] = songTitle

playlist 

var playlist = {} 
playlist.Beyonce = 'fear' 
playlist['BTS'] = 'fire' 

  
 function updatePlaylist(playlist, artist, song) { 
  playlist[artist]= song 
  return playlist
}
 
 function removeFromPlaylist(playlist, artist) { 
  delete playlist[artist]
  return playlist 
  
  
}