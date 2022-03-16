import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";
import { useDataLayerValue } from "./DataLayer";
import Login from "./Login";
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("user: ", user);
      });
    }

    console.log("TOKEN:", token);
  }, []);

  return <div className="App">{token ? <Player /> : <Login />}</div>;
}

export default App;
