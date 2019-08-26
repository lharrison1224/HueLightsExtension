# Philips Hue Lights Chrome Extension

A simple Chrome extension to provide quick access to simple Hue commands.

## Setup

Create `js/userInfo.js` with the following contents

```js
const userInfo = {
  ip: <bridge_ip>,
  username: <your_username>
};
```

Note: the ip of your bridge can be found by going [here](https://discovery.meethue.com). The extension will dynamically update your ip should it change.

## Use

Go to `chrome://extensions` and enable developer mode. Then simply load the extension from the source location on your computer.
