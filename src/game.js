const server = 'http://localhost:9999'

function get_anonymous_token(callback) {
  fetch(server + '/users/token').then(
    (response) => response.json()
  ).then(
    (r) => {
      if (r.success === true)
        callback(r.token);
      else
        callback("");
    }
  )
}

function get({token}, url, callback) {
  const header = new Headers();
  header.append('Authorization', 'Bearer ' + token);
  fetch(server + url, {headers: header}).then(
    (response) => response.json()
  ).then(
    (r) => {
      if (r.success === true)
        callback(r.output);
      else
        callback("");
    }
  )
}

function post({token}, url, data, callback) {
  const header = new Headers();
  header.append('Authorization', 'Bearer ' + token);
  header.append('Content-Type', 'application/json');

  fetch(server + url, {
    headers: header,
    method: 'post',
    body: JSON.stringify(data)
  }).then(
    (response) => response.json()
  ).then(
    (r) => {
      if (r.success === true)
        callback(r.output);
      else
        callback("");
    }
  )
}

export default {
  get_anonymous_token,
  get,
  post
}