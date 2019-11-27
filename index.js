const electron = require('electron');


const {app, BrowserWindow, Menu} =  electron;

//Menu.setApplicationMenu(false);

var mainWindow;
var addGuest;

 
function createWindow() {
    mainWindow = new BrowserWindow({});
    mainWindow.loadFile('index.html');

    // Build menu from templates    
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Insert Menu
    Menu.setApplicationMenu(mainMenu);
}

function createAddGuest() {
    addGuest = new BrowserWindow({
        width: 200,
        height:300,
        title: 'Add New Guest'
    });

    addGuest.loadFile('addGuest.html');
} 
// Create Menu Template
const mainMenuTemplate = [
    {
        label: 'File',

        submenu: [
            {
                label: 'Guest Entry',
                click() {
                    createAddGuest();
                }
            },

            {
                label: 'Guest Exit'
            },

            {
                label: 'Exit App',
                accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click(){
                    app.quit();
                }
            }
        ]
    }
];

// lets get our app ready
app.on("ready",createWindow);
 
