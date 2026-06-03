const SongsManager = function(){
    const prefix = "https://www.youtube.com/watch?v=";
    let _songs = {}
    let _prefixLength = prefix.length


    const addSong = function(name,link){
        _songs[name] = link.slice(_prefixLength)
    }
    const getSong = function(name){
        const link = prefix + _songs[name]
        console.log(link)
    }

    return{addSong,getSong}
}




const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
