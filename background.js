chrome.browserAction.onClicked.addListener(function(tab) {

  var presence = prompt("Enter your custom Rich Presence:");

  if (presence !== null && presence !== "") {

    chrome.tabs.executeScript({

      code: `document.querySelector('.rpc-image').src='https://i.imgur.com/OgSnyJm.png'; document.querySelector('.rpc-details').textContent='${presence}';`

    });

  }

});
  
