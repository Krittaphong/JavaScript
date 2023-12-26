class Song {
    constructor() {
        this.title;
        this.author;
    }

    play() {
        console.log("Song is playing");
    }

    stop() {
        console.log("Song is stopped");
    }
}

const mySong = new Song();
mySong.play();