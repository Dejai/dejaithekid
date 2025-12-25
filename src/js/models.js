class Album {
    constructor(jsonDetails){
        this.Key = jsonDetails?.Key ?? "";
        this.Name = jsonDetails?.Name ?? "";
        this.Year = jsonDetails?.Year ?? 1;
    }
}

class SongDetails {
    constructor(songName){
        this.Key = songName;
        var vals = songName.replaceAll(".mp3", "")?.split("_");
        vals.shift();
        this.Order = Number(vals[0]);
        vals.shift();
        this.Name = vals.join(" ");
    }
}