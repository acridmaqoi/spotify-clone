export const initalState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  playing: false,
  //token:
  //  "BQBx3IW58Zdj9ZCZ3B4SK6AAeMstfz1snm6VByBWtLvvJWQ-OemP5m6HuHV1cup0ce-lz0xi8JhLRPPnFnvbiER18f7zveSE6k-WN30i916XTAmlB-Q-QxpABQeY7IP2J4WlQ2v7GJFrZgjNlRQCDpMzwfyj2I3d",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
