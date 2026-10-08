const adj = ["Funny", "Silly", "Intelligent", "Super", "Silly", "Incredible", "Prickly", "Lucky", "Trickster"];

function askName() {
    function funGreeting() {
    const nameAdj = Math.floor(Math.random() * adj.length);document.getElementById("input").innerHTML ="Hello " + adj[nameAdj] + " " + question + "!"
};
funGreeting();
}




