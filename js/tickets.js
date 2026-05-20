```javascript
const formulario = document.getElementById('ticketForm');
const listaTickets = document.getElementById('listaTickets');

let contador = 1;

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const categoria = document.getElementById('categoria').value;
    const prioridad = document.getElementById('prioridad').value;

    const fila = document.createElement('tr');

    fila.innerHTML = `
        <td>TCK-00${contador}</td>
        <td>${usuario}</td>
        <td>${categoria}</td>
        <td>${prioridad}</td>
        <td><span class="estado">Abierto</span></td>
    `;

    listaTickets.appendChild(fila);

    contador++;

    formulario.reset();

    alert('Ticket registrado correctamente');
});
```
