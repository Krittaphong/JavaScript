// Parent Class
class Media {
    constructor(into) {
        this.publishDate = into.publishDate;
        this.name = into.name;
    }
}

// Child Class
class Song extends Media {
    constructor(songInfo) {
        super(songInfo);
        this.artist = songInfo.artist;
    }
}

const mySong = new Song({
    artist: 'Queen',
    name: 'Bohemian Rhapsody',
    publishDate: 1975,
});

console.log(mySong);