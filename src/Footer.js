import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import RepeatIcon from "@material-ui/icons/Repeat";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPrevious from "@material-ui/icons/SkipPrevious";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import React, { useEffect } from "react";
import { useDataLayerValue } from "./DataLayer";
import "./Footer.css";

function Footer({ spotify }) {
  const [{ item }, dispatch] = useDataLayerValue();

  useEffect(() => {
    // ensure player state is synced if song is changed by other client
    spotify.getMyCurrentPlaybackState().then((r) => {
      console.log(r);

      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, [spotify]);

  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src={item?.album.images[0].url}
          alt={item?.name}
        />
        {item ? (
          <div className="footer__songInfo">
            <h4>{item?.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="footer__songInfo">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPrevious className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
