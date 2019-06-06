const express = require("express");
const request = require("request");
const querystring = require("querystring");

const app = express();

const redirect_uri = process.env.REDIRECT_URI || "http://localhost:8000/callback";
const client_id = process.env.SPOTIFY_CLIENT_ID || "9eb98475812746b987fe2e6bf86c5e65";
const client_secret = process.env.SPOTIFY_CLIENT_SECRET || "518e4d0d571941c5843f35b9e57c1d3f";

app.get("/", function(req, res) {
  res.redirect("https://accounts.spotify.com/authorize?" +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: "user-read-private user-read-email",
      redirect_uri
    }))
})

app.get("/callback", function(req, res) {
  const code = req.query.code || null
  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code: code,
      redirect_uri,
      grant_type: "authorization_code"
    },
    headers: {
      "Authorization": "Basic " + (new Buffer(
        client_id + ":" + client_secret
      ).toString("base64"))
    },
    json: true
  }
  request.post(authOptions, function(error, response, body) {
    console.log(body);
    const access_token = body.access_token;
    const uri = process.env.WEBAPP_URI || "http://localhost:8080";
    res.redirect(uri + "?access_token=" + access_token);
  })
})

const port = process.env.PORT || 8000;
console.log(`Listening on port ${port}.`);
app.listen(port);