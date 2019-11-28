const electron = require('electron');


const {app, BrowserWindow, Menu, ipcMain} =  electron;

//Menu.setApplicationMenu(false);

var mainWindow;
var host;
var addGuest;


 
function createWindow() {
    mainWindow = new BrowserWindow({});
    mainWindow.loadFile('index.html');

    // Build menu from templates    
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Insert Menu
    Menu.setApplicationMenu(mainMenu);
}

// Adding Guest Window
function createAddGuest() {
    addGuest = new BrowserWindow({
        width: 500,
        height:300,
        title: 'Add New Guest'
    });

    addGuest.loadFile('addGuest.html');

    addGuest.on('close', function() {
        addGuest = null;
    });
} 

ipcMain.on('item:add', function(e, item){
    mainWindow.webContents.send('item:add', item);
    addWindow.close(); 
    // Still have a reference to addGuest in memory. Need to reclaim memory (Grabage collection)
});

// Adding Host Login Window
function createHost() {
    host = new BrowserWindow({
        width: 500,
        height:300,
        title: 'Owner'
    });

    host.loadFile('loginHost.html');

    host.on('close', function() {
        host = null;
    });
} 

// Create Main Menu Template

const mainMenuTemplate = [
    {
        label: 'File',

        submenu: [
            {
                label: 'Host Login',
                click() {
                    createHost();
                }
            },

            {
                label: 'Guest Entry',
                click() {
                    createAddGuest();
                }
            },

            {
                label: 'Guest Exit',
                click(){
                    mainWindow.webContents.send('item:clear');
                  }
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

// Adding Dev Tools only for application handlers not in production

if(process.env.NODE_ENV !== 'production'){
    mainMenuTemplate.push({
        label:  'Developer Tools',
        submenu: [
            {
                label: 'Toogle DevTools',
                accelerator: process.platform == 'darwin' ? 'Command + I' : 'Ctrl+I',
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    });
}
// lets get our app ready
app.on("ready",createWindow);
 
