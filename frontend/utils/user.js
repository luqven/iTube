export const fetchUsers = () => {
  return $.ajax({
    url: '/api/users',
    method: 'get',
  });
};

export const fetchUser = (id) => {
  debugger
  return $.ajax({
    url: `/api/users/${id}`,
    method: 'get',
  });
};