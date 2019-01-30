export const fetchChannel = (channel_id) => {
  return $.ajax({
    url: `/api/channels/${channel_id}`,
    method: 'get',
    data: { channel_id }
  });
};

export const fetchAllChannels = () => {
  return $.ajax({
    url: `/api/channels/`,
    method: 'get',
  });
};