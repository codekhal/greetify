const electron = require('electron');

const firebase = require('firebase');
const Nexmo = require('nexmo');
const nodemailer = require('nodemailer');

// Nexmo key retrieving
const nexmo = new Nexmo({
    apiKey: process.env.apiKey,
    apiSecret: process.env.apiSecret,
  });

// Nodemailer setup

let transporter = nodemailer.createTransport({
service: 'gmail',
host: 'smtp.gmail.com',
secure: 'true',
port: '465',
auth: {
user: process.env.Email,
pass: process.env.password
}
});

// Setting up firebase credentials
firebase.initializeApp({
    apiKey: process.env.apiKeyFB,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: "340375775378"
});

// ref() has all the database info objects we want
var ref = firebase.database().ref('guest');
global.ref = ref;

// Declaring some global variables to use across all other windows
global.nexo = nexmo.message;
global.mail = transporter;


const {app, BrowserWindow, Menu, ipcMain} =  electron;

//Menu.setApplicationMenu(false);

var mainWindow;
var host;
var addGuest;
var guestDetails;
var storeData = new Object();

// Function to create main Window of our app
function createWindow() {
    mainWindow = new BrowserWindow({
        // Setting up webpreferences since nodeintegration default is false with electron so we need to actiavte it
        webPreferences: {
        nodeIntegration: true
    }});
    mainWindow.loadFile('index.html');

    // Building menu from templates    
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Inserting Menu
    Menu.setApplicationMenu(mainMenu);
}

// Adding Guest Window
function createAddGuest() {
    addGuest = new BrowserWindow({
        width: 500,
        height:300,
        title: 'Add New Guest',

        webPreferences: {
            nodeIntegration: true
        }
    });

    addGuest.loadFile('public/addGuest.html');

    addGuest.on('close', function() {
        addGuest = null;
    });
} 

// Main function which has all the guest form data from the addGuest.html file via ipcRenderer
ipcMain.on('item:add', function(e, items){
    if(Object.keys(items) == 'InTime' || Object.keys(items) == 'OutTime') {
        Object.values(items) = Object.values(items).replace('/T/g',',');
    }
    storeData = items;
    console.log(test(storeData));

    // Sending data as an items{} object
    mainWindow.webContents.send('item:add', items);
    addGuest.close(); 

    // Still have a reference to addGuest in memory. We need to reclaim memory (Grabage collection)
});

// Adding Host Login Window
function createHost() {
    host = new BrowserWindow({
        width: 500,
        height:300,
        title: 'Owner',

        webPreferences: {
            nodeIntegration: true
        }
    });

    host.loadFile('public/loginHost.html');

    host.on('close', function() {
        host = null;
    });
} 

// adding a window to fetch and query all the guest details from the firebase
function guestDetail() {
    guestDetails = new BrowserWindow({
        width: 700,
        height:500,
        title: 'Guest Details',

        webPreferences: {
            nodeIntegration: true
        }
    });

    guestDetails.loadFile('public/guestDetails.html');

    guestDetails.on('close', function() {
        guestDetails = null;
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
                label: 'Show Guest Details',
                click(){
                    guestDetail();
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

// Pushing data into firebase
function test(storeData) {
    ref.push(storeData);
    return true;
}

// Retrieving Data from firebase
ref.on("value", function(snapshot) {
        snapshot.forEach(gus => {console.log(gus.child('Email').val())})
});
//console.log(guestName)


// lets get our app ready
app.on("ready",createWindow);
 

