console.log(
    "%cHello World",
    "color: #eb8934; font-weight: bold; font-size: 24px;"
);
let inputValue;
let input = document.getElementById('input');
input.oninput = function () {
    inputValue = input.innerHTML = input.value;
    //console.log(inputValue)
};
function terminal() {
    if (event.key === 'Enter') {
        if (inputValue == "") return;
        // console.log(input);
        // "renams text whit search.. id" document.getElementById('search-results').innerHTML = input; 

        // TODO: add color function to input if is valid command
        let defaultSettings = `<p class="history-log" style="margin: -5px;padding: 5px;margin-top: -10px;font-size:20px">`
        let inputLog = `<p1 id="main" style="font-size: 20px;padding: 3px;"><font color="#FED37E">visitor</font><font color="#D4D4D4">@</font><font color="#A9D3AB">terminal</font><font color="#D4D4D4">:$ ~ ${inputValue}</font></p1>`
        var history = document.getElementById('history');
        var newText = `<p class="history-log" style="margin: -5px;padding: 5px;margin-top: -10px;font-size:20px"><font color="#FED37E">visitor</font><font color="#D4D4D4">@</font><font color="#A9D3AB">terminal</font><font color="#D4D4D4">:$ ~ </font> <font color="#D4D4D4">${inputValue}</font></p>`;

        if (inputValue == "help") {
            newText = `
            ${inputLog}
            <p style="font-size: 4px;"><font color="#2D2D2D">what a nerd</font></p>
            <div class="border-box">
            <h1><font color="#D4D4D4">Music commands</font></h1>
            ${defaultSettings}<font class="glow">play</font><font color="#FED37E" style="font-size:18px;"> Plays a song with the given name or url</font></p>
            ${defaultSettings}<font class="glow">leave</font><font color="#FED37E" style="font-size:18px;"> Bye bye</font></p>
            ${defaultSettings}<font class="glow">skip</font><font color="#FED37E" style="font-size:18px;"> Skip the current playing track</font></p>
            ${defaultSettings}<font class="glow">autoplay</font><font color="#FED37E" style="font-size:18px;"> Enable or disable autoplay</font></p>
            ${defaultSettings}<font class="glow">volume</font><font color="#FED37E" style="font-size:18px;"> Let's you change the bots output volume</font></p>
            ${defaultSettings}<font class="glow">pause</font><font color="#FED37E" style="font-size:18px;"> Pause the current playing track</font></p>
            ${defaultSettings}<font class="glow">resume</font><font color="#FED37E" style="font-size:18px;"> Resume the current playing track</font></p>
            ${defaultSettings}<font class="glow">queue</font><font color="#FED37E" style="font-size:18px;"> Display the queue of this server</font></p>

            <h1><font color="#D4D4D4">Other commands</font></h1>
            ${defaultSettings}<font class="glow">lyrics</font><font color="#FED37E" style="font-size:18px;"> searches for lyrics on google</font></p>
            ${defaultSettings}<font class="glow">help</font><font color="#FED37E" style="font-size:18px;"> link to this page</font></p>
            <h1><font color="#D4D4D4">Features</font></h1>
            ${defaultSettings}<font class="features">Autoplay</font>
            ${defaultSettings}<font class="features">Spotify support and more...</font>
            ${defaultSettings}<font class="features">Volume Control</font>
            ${defaultSettings}<font class="features">Easy to use</font>
            ${defaultSettings}<font class="features">High-quality sound</font>
            ${defaultSettings}<font class="features">Slash commands</font>
            </div>
            <p style="font-size: 4px;"><font color="#2D2D2D">what a nerd</font></p>
            `;
        } else if (inputValue == "test") {
            console.log("test");
        } else {
            // returns help text
            newText = `<p class="history-log" style="margin: -5px;padding: 5px;margin-top: -10px;font-size:20px"><font color="#FED37E">visitor</font><font color="#D4D4D4">@</font><font color="#A9D3AB">terminal</font><font color="#D4D4D4">:$ ~ </font> <font color="#D4D4D4"> Command not found. For a list of commands, type '</font><font class="glow">help</font><font color="#D4D4D4">'.</font></p>`;
        }

        history.insertAdjacentHTML('beforeend', newText);
        // resets input box
        document.getElementById('input').value = "";




    }
}

