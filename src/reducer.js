export const initalState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQBx3IW58Zdj9ZCZ3B4SK6AAeMstfz1snm6VByBWtLvvJWQ-OemP5m6HuHV1cup0ce-lz0xi8JhLRPPnFnvbiER18f7zveSE6k-WN30i916XTAmlB-Q-QxpABQeY7IP2J4WlQ2v7GJFrZgjNlRQCDpMzwfyj2I3d",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
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

    default:
      return state;
  }
};

export default reducer;
