chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.create({url: "chrome://policy/"});
});
