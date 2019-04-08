
let fbAuth = null;

function setProfileInfo(userID){
    console.log(FB.getAccessToken());
    // FB.api('/'+userID+'?redirect=false&fields=id,name&'+FB.getAccessToken(), function(response) {
    //     console.log(response);
    // });

    FB.api('/me', 'GET', {fields: 'last_name'}, function(response) {
        console.log(response);
        if(!response.error) {
            document.getElementsByClassName('profile-error')[0].innerText = response.last_name;
        }


    });
}

function setProfilePicture(userID){
    console.log(FB.getAccessToken());
    FB.api(
        '/'+userID+'/picture?redirect=false&type=large',
        'GET',
        {},
        function(response) {
            console.log(response);
            if(response.error){
                let error = document.getElementsByClassName('profile-error');
                error.textContent = response.error.message;
                console.log('%c'+response.error.message, 'color:yellow');
                return;
            }
            let profile = document.getElementById('profile');
            profile.src = response.data.url;
        }
    );
}

function statusChangeCallback(response){
    // console.log(response);
    if(response.status === "connected"){
        // console.log('%cUser '+response.authResponse.userID+' is connected!', 'color:green');
        fbAuth = response.authResponse;
        window.localStorage.setItem('fbAuth',JSON.stringify(response.authResponse));
        setProfilePicture(response.authResponse.userID);
        setProfileInfo();
    } else{
        console.log('User is not connected');
    }
}

function checkLoginState() {
    if(fbAuth !== null){
        console.log('Using existent local storage token.')
        setProfilePicture(fbAuth.userID);
        setProfileInfo(fbAuth.userID);
    } else {
        console.log('Seeking new fbToken');
        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });
    }
}

// always in the end
window.fbAsyncInit = function() {
    FB.init({
        appId      : '388583575204167',
        cookie     : true,
        xfbml      : true,
        status: true,
        version    : 'v3.1'
    });

    FB.AppEvents.logPageView();

    (function(){

        // define Authentication Data from local storage
        if(window.localStorage.fbAuth !== null){
            fbAuth = JSON.parse(window.localStorage.getItem('fbAuth'));
        }

    })();

    FB.Event.subscribe('xfbml.render', function(){
        console.log('FB loading is finished');
        checkLoginState();
        // setProfileInfo();
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
