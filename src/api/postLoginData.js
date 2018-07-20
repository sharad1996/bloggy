import URL from './api';

export function postUser(action) {
  let url = URL + 'api/login';   //`${}`
  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: action.username,
      password: action.password
    })
  })
  .then( (response) => response.json() );
}

