# Greetify


<p align="center">
  <img src="./logo/greetify.png" width="180">
</p>

<p align="center">
<img src="./logo/guest-1.png" width="400">
</p>

[![Open Issues](https://img.shields.io/github/issues-raw/codekhal/greetify)](https://github.com/codekhal/greetify/issues)
[![Forks](https://img.shields.io/github/issues-raw/codekhal/greetify?style=plastic)](https://github.com/codekhal/greetify/network/members)
[![Stars](https://img.shields.io/github/stars/codekhal/greetify?style=plastic)](https://github.com/codekhal/greetify/stargazers)
![Maintained](https://img.shields.io/maintenance/yes/2019)
[![Telegram](https://img.shields.io/badge/Telegram-Chat-yellowgreen)](https://telegram.me/codekhal)

## Index

- [Index](#index)
- [About](#about)
- [Develpoment](#develpoment)
  - [Installation](#installation)
- [File Structure](#file-structure)
- [Guideline](#guideline)
- [Gallery](#gallery)
- [Credit/Acknowledgment](#creditacknowledgment)
- [License](#license)

## About

> Summer SDE-Intern Hiring Challenge-Innovaccer

A desktop app build on top of Electron - an open source framework which can be used for creating cross platform desktop native applications. This app handles entry management system for easy office Checkins and Checkouts. This project allows a host and a user to fill in their details and timestamp of their entry is generated automatically. ALso, Database handling for storing and fetching the data is done via [Firebase real-time database system](https://firebase.google.com/docs/database). For mailing and messaging system [Nodemailer](https://nodemailer.com/about/) and [Nexmo api](https://www.nexmo.com/products/sms) respectively is been setup. <br>
Currently as a MVP(minimal viable product), I made this as an assignment submission for the innovacer [summergeeks](https://summergeeks.in/) summer internship challenge.

## Installation

**Development**

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
*Add both the above commands to allow electron to work in your Nodejs environment.*

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

- Finally run the application using 

```bash
$ npm start
```  
Note: Add *electron .* inside the start script to run.

## File Structure
- Add a file structure here with the basic details about files, below is an example.
```bash
```