chrome.browserAction.onClicked.addListener(function(activeTab){
    var newURL = "https://gist.github.com/rafnixschaf/9519df06767f0ca96a4a642c2577648e";
    chrome.tabs.create({ url: newURL });
});