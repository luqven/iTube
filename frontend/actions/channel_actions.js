import { fetchChannel, fetchAllChannels } from "../utils/channel";

export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const RECEIVE_ALL_CHANNELS = "RECEIVE_ALL_CHANNELS";


export const receiveChannel = payload => {
  return {
    type: RECEIVE_CHANNEL,
    payload,
  };
};

export const receiveAllChannels = payload => {
  return {
    type: RECEIVE_ALL_CHANNELS,
    payload,
  };
};

export const getChannel = channelId => dispatch => {
  return fetchChannel(channelId).then(
    channel => dispatch(receiveChannel(channel))
  );
};

export const getAllChannels = () => dispatch => {
  return fetchAllChannels().then(
    channels => dispatch(receiveAllChannels(channels))
  );
};