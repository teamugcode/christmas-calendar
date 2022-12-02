# Simple Christmas / Advent Calendar

![calendar_example](https://user-images.githubusercontent.com/16792417/205364957-13978807-e800-46a0-9023-6056c0ef4fb5.PNG)

## Description

Lists calendar doors with random order, allows to open calendar door on current day and saves opened doors to localStorage so user does not have to open same doors again.

This code is based on my React practice three years ago so it may includes interesting choices :joy:
 
Live version is available [on my website](https://www.teamugcode.fi/xmas/) for some time and there you will find some phrases to cheer your days! :smile:

## Technique
This project is created with [Create React App](https://github.com/facebook/create-react-app).

Node version v16.15.1 works at least.

If you want fork this calendar to make your own:
1. Run `npm ci` to install the dependencies
2. Run `npm start` to start developing
3. Replace example texts with your own [here](https://github.com/teamugcode/christmas-calendar/blob/fe7241e6103a07ab0bad467fd6c474627693ea0b/src/helpers.js#L3-L76) or use dirty .env hack like `REACT_APP_CALENDAR_TEXTS='[{"text":"A"},{"text":"A"},{"text":"A"},{"text":"A"},{"text":"A"},{"text":"A"},{"text":"A"},{"text":"A"},{"text":"A"},{"text":"A"},{"text":"A"},{"text":"A"},{"text":"A"},{"text":"A"},{"text":"A"},{"text":"A"},{"text":"A"},{"text":"A"},{"text":"A"},{"text":"A"},{"text":"A"},{"text":"A"},{"text":"A"},{"text":"A"}]'`.
4. Run `npm build` if you want publish it in single folder or choose your own way to publish from [Create React App Deployment Section](https://create-react-app.dev/docs/deployment/)

