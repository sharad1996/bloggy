import URL from './api';

export function uploadPost(action) {
  let url = URL + 'api/posts';   //`${}`
  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      description: action.description,
      status: action.status,
      token: action.token
    })
  })
  .then( (response) => response.json() );
}

export function uploadProfileImage(action) {
  debugger
  let url = URL + 'api/users';   //`${}`
  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      file: action.name,
    })
  })
  .then( (response) => response.json() );
}



