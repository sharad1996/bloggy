import URL from './api';

var token = localStorage.getItem('token');

export function loadPostData() {

  let url = URL + 'api/posts' ;
  var params = { token: token };
  return fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },

  })
.then( (response) => response.json() );
}
