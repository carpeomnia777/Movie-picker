document.getElementById("myBtn").addEventListener("click", randMovie);

var arr = ["Sinister", "Dead Silence", "Fallen", "Barbarian", "Spree", "texas chainsaw massacre", "watcher", "NOPE", "Incantation", "Sleepy Hollow", "Alien", "The skeleton key", "The Ruins", "The curse of la llorona", "Annabelle Creation", "The nun", "Drag me to hell", "Annabelle comes home", "Prey for the devil", "The conjuring: the devil made me do it", "scary stories to tell in the dark","Scream (2022)", "As above, so below", "The night house", "The descent", "Oculus", "The others", "Paranormal activity", "The thing (2011)", "Train to Busan", "Suspiria", "Flatliners", "Hollow Man", "Gothika", "REC", "Poltergeist (2015)"]


function randMovie(){
var header = document.getElementById("movie").innerHTML= arr[Math.floor(Math.random() * arr.length+1)];


}