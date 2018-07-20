import URL from './api';

export function postUserDetails(action) {
  let url = URL + 'api/signup';
  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: action.name,
      username: action.username,
      email: action.email,
      password: action.password,
      phoneNumber: action.phoneNumber
    })
  })
  .then( (response) => response.json() );
}
