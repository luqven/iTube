export const postUser = (user) => { // sign up
  return $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user }
  });
};

export const postSession = (user) => { // sign in
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user }
  });
};

export const deleteSession = () => { // sign out
  return $.ajax({
    url: '/api/session',
    method: 'DELETE'
  });
};
