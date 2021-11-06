const API_URL = 'https://jsonplaceholder.typicode.com';

// XML HTTP REQUEST
const xhr = new XMLHttpRequest();

function onRequestHandler() {
    // Peticion AJAX devuelve una respuesta y un codigo de respuesta
    if(this.readyState === 4 && this.status === 200) {
        // 0 = UNSET, no se ha llamado al metodo open
        // 1 = OPENED, se ha llamado al metodo open
        // 2 = HEADERS_RECEIVED, se esta llamando al metodo send()
        // 3 = LOADING
        // 4 = DONE

        // parsear para obtener un JSON
        const data = JSON.parse(this.response)
        console.log(data);

        const HTMLResponse = document.querySelector('#app');

        const template = data.map(user => `<li>${user.name} - ${user.email}</li>`);
        HTMLResponse.innerHTML = `<ul>${template}</ul>`;
    }
}

xhr.addEventListener('load', onRequestHandler);
xhr.open('GET', `${API_URL}/users`);
xhr.send();

