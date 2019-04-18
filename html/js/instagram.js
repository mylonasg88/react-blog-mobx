let instToken = null;

function parseInstagramUrlForToken() {
    let url = document.URL;
    let acsTokn = '#access_token=';
    // is redirected from Authentication?
    if (url.indexOf(acsTokn) > 0) {
        console.log('parsing url');
        let token = url.substr(url.indexOf(acsTokn) + 14, url.length);
        instToken = token;
        window.localStorage.setItem('instToken', instToken);
        // Redirect to:
        // window.location = document.URL.replace(acsTokn + instToken,'');
        console.log('Redirecting to ' + document.location.origin + '/flex/dashboard');
        window.location = document.location.origin + '/flex/dashboard.html';
    } else {
        // does token exist in local storage?
        if (window.localStorage.getItem('instToken')) {
            instToken = window.localStorage.getItem('instToken');
        }
    }
}

(function (d) {
    console.log('on load');
    parseInstagramUrlForToken();
}(document));
