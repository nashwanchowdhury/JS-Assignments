// Here are the instructions for this assignments:

//     Create buttons that do each of the tasks below

//     Render the results to the page in html elements.

//     Hide the results from the previous actions

// Get all posts
function getallPosts() {
    document.getElementById('Posts').innerHTML = '';
     fetch('http://jsonplaceholder.typicode.com/posts')
    .then((result) => result.json())
    .then((json) => document.getElementById('Posts').innerHTML = JSON.stringify(json));
}

// Get post with id of 10
function getPost10ID() {
document.getElementById('Posts').innerHTML = '';
function findID (x, data) {
    let t = data.findIndex(e => e.id === x)
    return data[t];
}

id10 = fetch('http://jsonplaceholder.typicode.com/posts')
.then((result) => result.json())
.then((json) => document.getElementById('Posts').innerHTML = JSON.stringify(findID(10, json)));
}



// //Create a new post and log the id generated for it by the server
function createPost() {
document.getElementById('Posts').innerHTML = ''
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'Sesame Street',
      body: 'Elmo and Friends',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => document.getElementById('Posts').innerHTML = JSON.stringify(json) + ' ' + 'ID: ' + json.id); 
}
// // Replace the post with id of 12 and render the responseJSON
function replacePostID() {
document.getElementById('Posts').innerHTML = ''
fetch('https://jsonplaceholder.typicode.com/posts/12', {
  method: 'PUT',
  body: JSON.stringify({
    id: 12,
    title: 'Sesame Street',
    body: 'Elmo and Friends',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => document.getElementById('Posts').innerHTML = JSON.stringify(json));
}
// //Update the title of post with id of 12 and render responseJSON
function updatePostTitle() {
document.getElementById('Posts').innerHTML = ''
fetch('https://jsonplaceholder.typicode.com/posts/12', {
  method: 'PUT',
  body: JSON.stringify({
    id: 12,
    title: 'Sesame Street Featuring Bill Nye the Science Guy',
    body: 'Elmo and Friends',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => document.getElementById('Posts').innerHTML = JSON.stringify(json));
}
// //Delete the post with id of 12 and render a success message
function deletePost() {
document.getElementById('Posts').innerHTML = ''
fetch('https://jsonplaceholder.typicode.com/posts/12', {
  method: 'DELETE',
});
document.getElementById('Posts').innerHTML = 'Post has been deleted'
}


