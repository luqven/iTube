import { fetchChannel, fetchAllChannels } from "../utils/channel";

export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const RECEIVE_ALL_CHANNELS = "RECEIVE_ALL_CHANNELs";


export const receiveChannel = channel => {
  return {
    type: RECEIVE_CHANNEL,
    channel,
  };
};

export const receiveAllChannels = channels => {
  return {
    type: RECEIVE_ALL_CHANNELS,
    channels,
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