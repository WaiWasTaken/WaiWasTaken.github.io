
const commands = {
    help: "help",
    test: "test",
    clear: "clear",
    banner: "banner"
};

let banner = `
████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗     
╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║     Welcome to the website!
   ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║     Type 'help' to see list of available commands.
   ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║     
   ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗
   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝  v2.14.3 
`


function terminal(ele) {
    if (event.key === 'Enter') {
        let inputValue;
        inputValue = ele.value
        //console.log(inputValue);
        if (inputValue == "") return;
        // console.log(input);
        // "renams text whit search.. id" document.getElementById('search-results').innerHTML = input; 

        // TODO: add color function to input if is valid command
        let defaultSettings = `<p class="history-log" style="margin: -5px;padding: 5px;margin-top: -10px;">`
        let inputLog = `<p1 id="main" style="padding: 3px;"><font color="#FED37E">visitor</font><font color="#D4D4D4">@</font><font color="#A9D3AB">terminal</font><font color="#D4D4D4">:$ ~ ${inputValue}</font></p1>`;

        let history = document.getElementById('history');

        let newText = `<p class="history-log" style="margin: -5px;padding: 5px;margin-top: -10px;"><font color="#FED37E">visitor</font><font color="#D4D4D4">@</font><font color="#A9D3AB">terminal</font><font color="#D4D4D4">:$ ~ </font> <font color="#D4D4D4">${inputValue}</font></p>`;
        let space = `<p style="font-size: 4px;"><font color="#2D2D2D">what a nerd</font></p>`

        if (inputValue == "help") {
            newText = `
            ${inputLog}
            ${space}
            ${space}

            ${defaultSettings}help, test, banner, clear</p>

            ${space}
            ${space}
            `;
        } else if (inputValue == "test") {
            // console.log("test");
            // make loop that repeats 100 times
            for (let i = 0; i < 1000; i++) {
                // logs the number of times the loop has run
               //  console.log(i);
                window.open("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDLSyBtaIH8BldRVNp8z6B0Z47aMZk11wVAZQlBk65aC_TALf3tL7Y4ENbEReOMYUiE_o&usqp=CAU", "_blank");
            }
        } else if (inputValue == "clear") {
            history.innerHTML = "";
            document.getElementById('input').value = "";
            return;
        } else if (inputValue == "banner") {
           newText = `<pre id="banner" style="color: #D4D4D4;">${banner}</pre>`;
        }
        else {
            // returns help text
            newText = `<p class="history-log" style="margin: -5px;padding: 5px;margin-top: -10px;"><font color="#FED37E">visitor</font><font color="#D4D4D4">@</font><font color="#A9D3AB">terminal</font><font color="#D4D4D4">:$ ~ </font> <font color="#D4D4D4"> Command not found. For a list of commands, type '</font><font class="glow">help</font><font color="#D4D4D4">'.</font></p>`;
        }

        history.insertAdjacentHTML('beforeend', newText);
        // resets input box
        document.getElementById('input').value = "";
    }
}


function InstaDetect(e) {
    let input = e.value;
    input = input.toLowerCase();
    let args = input.split(/ +/);
    // console.log(args[0]);

    let noArgs0 = e.value.replace(args[0], " ");
    if (noArgs0.length == 0) {
        noArgs0 = "";
    }

    if (Object.values(commands).indexOf(input) > -1) {
        // console.log("command found");
        document.getElementById('input').style.color = "#A9D3AB";
    }else {
        document.getElementById('input').style.color = "#F58E8E";
    }

}

