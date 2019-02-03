export const fetchChannel = (id) => {
  return $.ajax({
    url: `/api/channels/${id}`,
    method: 'get',
    data: {id}
  });
};

export const fetchAllChannels = () => {
  return $.ajax({
    url: `/api/channels/`,
    method: 'get',
  });
};

export const postChannel = (channel) => {
  return $.ajax({
    url: `/api/channels/`,
    method: 'post',
    data: {channel}
  });
};