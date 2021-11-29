function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/admin.directory.user https://www.googleapis.com/auth/admin.directory.user.readonly https://www.googleapis.com/auth/cloud-platform"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Erroherr signing in", err); });
  }
  function loadClient() {
    gapi.client.setApiKey("AIzaSyAZd3dLw-gshkRYrU4C6sm0iXu-6bI0Smg");
    return gapi.client.load("https://admin.googleapis.com/$discovery/rest?version=directory_v1")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.directory.users.list({"domain": "carupi.com"})
        .then(function(response) {
                
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "294303033871-kjf1o45b5n7k19v49frgnqqba1atoiuc.apps.googleusercontent.com"});
  });

  let usuario = Response.users
  console.log(Response)

 

 