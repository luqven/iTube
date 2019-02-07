export const fetchUsers = () => {
  return $.ajax({
    url: '/api/users',
    method: 'get',
  });
};

export const fetchUser = (id) => {
  return $.ajax({
    url: `/api/users/${id}`,
    method: 'get',
  });
};