const make_album = (artist_name, tittle, numberOfTracks) => {
    let artistObject = new Object();
    artistObject.artist_name = artist_name;
    artistObject.tittle = tittle;
    if (numberOfTracks !== undefined) {
      artistObject.numberOfTracks = numberOfTracks;
    }
  
  
    console.log(artistObject)
  };
  make_album("atif aslam", "CookStudio");
  make_album("atif aslam", "CookStudio");
  make_album("atif aslam", "CookStudio", 0);
  