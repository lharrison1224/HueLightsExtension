document.addEventListener('DOMContentLoaded', onLoad);

function onLoad() {
  updateIpAddress();

  document.getElementById('on-button').addEventListener('click', () => {
    update({
      endpoint: '/groups/0/action',
      data: config.roomOn
    });
  });

  document.getElementById('off-button').addEventListener('click', () => {
    update({
      endpoint: '/groups/0/action',
      data: config.roomOff
    });
  });

  document.getElementById('bright-button').addEventListener('click', () => {
    update({
      endpoint: '/groups/0/action',
      data: config.roomBright
    });
  });

  document.getElementById('dim-button').addEventListener('click', () => {
    update({
      endpoint: '/groups/0/action',
      data: config.roomDim
    });
  });

  document.getElementById('night-button').addEventListener('click', () => {
    update({
      endpoint: '/groups/0/action',
      data: config.roomNight
    });
  });

  document.getElementById('red-button').addEventListener('click', () => {
    update({
      endpoint: '/groups/0/action',
      data: config.roomRed
    });
  });

  document.getElementById('orange-button').addEventListener('click', () => {
    update({
      endpoint: '/groups/0/action',
      data: config.roomOrange
    });
  });

  document.getElementById('yellow-button').addEventListener('click', () => {
    update({
      endpoint: '/groups/0/action',
      data: config.roomYellow
    });
  });

  document.getElementById('green-button').addEventListener('click', () => {
    update({
      endpoint: '/groups/0/action',
      data: config.roomGreen
    });
  });

  document.getElementById('blue-button').addEventListener('click', () => {
    update({
      endpoint: '/groups/0/action',
      data: config.roomBlue
    });
  });

  document.getElementById('indigo-button').addEventListener('click', () => {
    update({
      endpoint: '/groups/0/action',
      data: config.roomIndigo
    });
  });

  document.getElementById('violet-button').addEventListener('click', () => {
    update({
      endpoint: '/groups/0/action',
      data: config.roomViolet
    });
  });
}

function update(command) {
  const ajaxBody = generateAjaxBody(command);
  $.ajax(ajaxBody);
}

function generateAjaxBody(command) {
  const ajaxBody = {
    url: constructBaseUrl() + command.endpoint,
    type: 'PUT',
    contentType: 'application/json',
    data: JSON.stringify(command.data)
  };
  return ajaxBody;
}

function constructBaseUrl() {
  return `https://${userInfo.ip}/api/${userInfo.username}`;
}

function updateIpAddress() {
  $.get({
    url: 'https://discovery.meethue.com/',
    success: res => {
      userInfo.ip = res[0].internalipaddress;
    }
  });
}
