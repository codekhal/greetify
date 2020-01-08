# Greetify


<p align="center">
  <img src="./logo/greetify.png" width="180">
</p>

<p align="center">
<img src="./logo/guest-1.png" width="400">
</p>

[![Open Issues](https://img.shields.io/github/issues-raw/codekhal/greetify?style=flat)](https://github.com/codekhal/greetify/issues)
[![Forks](https://img.shields.io/github/forks/codekhal/greetify?style=flat)](https://github.com/codekhal/greetify/network/members)
[![Stars](https://img.shields.io/github/stars/codekhal/greetify?style=flat)](https://github.com/codekhal/greetify/stargazers)
![Made with Electron](https://img.shields.io/badge/Made%20with-electron-blue?style=flat&logo=node)

![Maintained](https://img.shields.io/maintenance/yes/2020)

## :ledger: Index

- [Index](#index)
- [About](#about)
- [Development](#develpoment)
  - [Installation](#installation)
- [File Structure](#file-structure)
- [Guidelines](#guideline)
- [ScreenShots](#screenshots)
- [Present Contributors](#contributors)
- [License](#license)

## :briefcase: About

> Summer SDE-Intern Hiring Challenge [SummerGeeks](https://summergeeks.in/) - Innovaccer

A desktop app build on top of Electron - an open source framework which can be used for creating cross platform desktop native applications. This app handles entry management system for easy office Checkins and Checkouts. This project allows a host and a user to fill in their details and timestamp of their entry is generated automatically. ALso, Database handling for storing and fetching the data is done via [Firebase real-time database system](https://firebase.google.com/docs/database). For mailing and messaging system [Nodemailer](https://nodemailer.com/about/) and [Nexmo api](https://www.nexmo.com/products/sms) respectively is been setup. <br>

## :electric_plug: Installation

### :gear: **Development**

Just want to run the application, you can do is

- Clone the repository

```bash
$ git clone https://github.com/codekhal/greetify.git

```

- Install dependencies by using the following commands.

```bash
$ cd greetify
$ sudo npm install
```
Note: If you want to allow native Nodejs modules to work against the version of Nodejs your electron project is using then

```bash
$ npm install --save-dev electron-rebuild
$ $(npm bin)/electron-rebuild

```
*Add both the above commands to allow electron to work in your Nodejs environment. One needs to do electron rebuild to allow grpc work for the electron app*

- Get your own API Key & API Secret from [Nexmo API](https://www.nexmo.com/products/sms) for messaging funtionality to work. 

- create a `.env` file in root directory and assign the following environment variables

```bash
$ cd greetify
$ touch .env

$ echo "EMAIL={your email id}" >> .env
$ echo "PASSWORD={your email password}" >> .env
$ echo "NEXMOAPIKEY={your nexmo api key for sms}" >> .env
$ echo "NEXMOAPISECRET={your nexmo api secret for sms}" >> .env
```
**It considered a good practice to hid your credentials in .env file and then not pushing onto the version control, though this project had less scope for that.**

- Finally run the application using 

```bash
$ npm start
```  
Note: Add *electron .* inside the start script to run.

- Finally if you are facing the error **" Failed to load gRPC binary module because it was not installed for the current system ”** related to grpc then here is an [article]((https://medium.com/firebase-developers/using-firebase-in-electron-tips-and-tricks-24ac5b44bf5a)) for help. Firestore(Firebase) also uses gRPC so one needs to install this Devdependency in their package.json to resolve this error.

## :open_file_folder: File Structure

- File structure with the basic details about files and directories.

```bash
- __greetify__
  - [LICENSE](greetify/LICENSE)
  - [README.md](greetify/README.md)
  - [index.html](greetify/index.html)
  - [list2.md](greetify/list2.md)
  - __logo__
    - [Greetify.png](greetify/logo/Greetify.png)
    - __favicon_io__
      - [favicon16.png](greetify/logo/favicon_io/favicon16.png)
      - [favicon.ico](greetify/logo/favicon_io/favicon.ico)
      - [favicon32.png](greetify/logo/favicon_io/favicon32.png)
    - [greetify.png](greetify/logo/greetify.png)
    - [guest-1.png](greetify/logo/guest-1.png)
  - [node_modules](greetify/node_modules)
  - [package-lock.json](greetify/package-lock.json)
  - [package.json](greetify/package.json)
  - [addGuest.html](greetify/public/addGuest.html)
  - [guestDetails.html](greetify/public/guestDetails.html)
  - [loginHost.html](greetify/public/loginHost.html)
  - __screenshots__
    - [1.png](greetify/screenshots/1.png)
    - [2.png](greetify/screenshots/2.png)
    - [3.png](greetify/screenshots/3.png)
    - [4.png](greetify/screenshots/4.png)
    - [5.png](greetify/screenshots/5.png)
    - [6.png](greetify/screenshots/6.png)
    - [7.jpg](greetify/screenshots/7.jpg)
  - [emailClient.js](greetify/scripts/emailClient.js)
  - [firebase.js](greetify/scripts/firebase.js)
  - [index.js](greetify/scripts/index.js)


```
## ScreenShots

<p align="center">
  <img src="./screenshots/1.png" width="400"> <br><hr/><br>
</p>
<p align="center">
  <img src="./screenshots/2.png" width="400"> <br><hr/><br>
</p>
<p align="center">
  <img src="./screenshots/3.png" width="400"> <br><hr/><br>
</p>
<p align="center">
  <img src="./screenshots/4.png" width="400"> <br><hr/><br>
</p>
<p align="center">
  <img src="./screenshots/5.png" width="400"> <br><hr/><br>
</p>
<p align="center">
  <img src="./screenshots/6.png" width="400"> <br><hr/><br>
</p>
<p align="center">
  <img src="./screenshots/7.jpg" width="400"><br>
</p>


## :scroll: Guidelines

- __Contribution Guidelines__

Kindly follow the [*Contributions Guildlines*](https://gist.github.com/PurpleBooth/b24679402957c63ec426) before you create any pull requests or issues. Though feel free to contribute in any form. <br> Open Source <3

## :star2: Present Contributors
[![Contributors](https://img.shields.io/github/contributors/codekhal/greetify?style=plastic)](https://github.com/codekhal/greetify/graphs/contributors)

### Want to share your ideas

`Feel free to reach out to me`

[![Telegram](https://img.shields.io/badge/Telegram-Chat-yellowgreen)](https://telegram.me/codekhal)

## :lock: License
[![License](https://img.shields.io/github/license/codekhal/greetify?style=plastic)](https://github.com/codekhal/greetify/blob/master/LICENSE)
