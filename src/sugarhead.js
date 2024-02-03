const MyCloudflare = new CloudflareWrapper();

// Once doc is ready
MyDom.ready( async () => {
    // Get the login details
    var loginDetails = await MyAuth.onGetLoginDetails();
    var isLoggedIn = loginDetails?.IsLoggedIn ?? false;

    // Get the list of albums
    var albums = await MyCloudflare.Files("GET", "/sugarhead/albums");
    console.log(albums);

    // Get template & add
    var template = await MyTemplates.getTemplateAsync("templates/sugarhead-album.html", albums);
    MyDom.setContent("#listOfAlbums", {"innerHTML": template});
});


// Get album details
async function onGetAlbumDetails(section){
    var albumKey = section.getAttribute("data-album-key");
    var albumDetails = await MyCloudflare.Files("GET", `/sugarhead/album/?key=${albumKey}`);
    console.log(albumDetails);
    var songs = albumDetails?.Songs?.map(x => new SongDetails(x)) ?? [];
    var songTemplates = await MyTemplates.getTemplateAsync("/templates/sugarhead-song.html", songs);
    MyDom.setContent("#listOfSongs", {"innerHTML": songTemplates});
}

// Get a song
async function onGetSong(song){
    try{
        var audioControls = document.getElementById("audioControls");
        var sourceElement = document.getElementById("audioSource");
        if(audioControls == undefined || sourceElement == undefined){
            throw new Error("Can't find autio controls");
        }
        var songKey = song.getAttribute("data-song-key");
        var songUrl = `https://files.the-dancinglion.workers.dev/sugarhead/song/?key=${songKey}`;
        console.log(songUrl);
        sourceElement.src = songUrl;
        audioControls.load();
        audioControls.play();
        // MyDom.setContent("#audioSource", {"src": songUrl});
    } catch(err){
        MyLogger.LogError(err);
       
    }
    
    
}