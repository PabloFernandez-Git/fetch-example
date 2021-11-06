// FETCH

const API_URL = 'https://jsonplaceholder.typicode.com';

const HTMLResponse = document.querySelector('#app');

fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then((users) => {
        const template = users.map((user) => `<li>${user.name} - ${user.email}</li>`);
        HTMLResponse.innerHTML = `<ul>${template}</ul>`;
})

