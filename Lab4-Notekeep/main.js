const form = document.getElementById('note-form');
const tableBody = document.getElementById('notes-tbody');

let notes = JSON.parse(localStorage.getItem('notes')) || [];

//sortowanie przypięcia 


function renderTable() {
  notes.sort((a, b) => (a.pinned === b.pinned) ? 0 : a.pinned ? -1 : 1);
  tableBody.innerHTML = '';

  notes.forEach((note, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${note.title}</td>
      <td>${note.content}</td>
      <td class="note-color" style="background-color: ${note.color}; border-color: ${note.color}"></td>
      <td>${note.pinned ? 'Tak' : 'Nie'}</td>
      <td>${note.date}</td>
      <td>
      <button class="edit-btn" data-index="${index}">Edytuj</button>
      <button class="delete-btn" data-index="${index}">Usuń</button>
      </td>
    `;
    tableBody.appendChild(row);
  });

  // Znajdz przysciski usun
  const deleteButtons = tableBody.querySelectorAll('.delete-btn');
  
  // dodaj wydarzenie na przycisk
  deleteButtons.forEach(button => {
    button.addEventListener('click', deleteNote);
  });



  const editButtons = tableBody.querySelectorAll('.edit-btn');
  
  // dodaj wydarzenie na przycisk
  editButtons.forEach(button => {
      button.addEventListener('click', editNote);
  });
}

// Tworzenie Notatki

function saveNote(event) {
  event.preventDefault();

  const title = form.title.value;
  const content = form.content.value;
  const color = form.color.value;
  const pinned = form.pinned.checked;
  const date = new Date();

  const note = { title, content, color, pinned, date };

//dodawanie do tablicy 
  notes.push(note);

  //zapisywanie do localstorage
  localStorage.setItem('notes', JSON.stringify(notes));
  renderTable();
}

form.addEventListener('submit', saveNote);


function deleteNote(event) {
    event.preventDefault();
  
    // Pobranie indeksu notatki z tablicy na podstawie atrybutu data-index przycisku usuwania
    const index = event.target.dataset.index;
  
    // Usuwanie notatki z tablicy
    notes.splice(index, 1);
  
    // Zapisanie tablicy w localStorage
    localStorage.setItem('notes', JSON.stringify(notes));
  
    // Renderowanie tabeli z notatkami
    renderTable();
  }


  function editNote(event) {
    event.preventDefault();
    // Pobranie indeksu notatki z tablicy na podstawie atrybutu data-index przycisku
    const index = event.target.dataset.index;
    console.log(index)
    
    //pobieranie elementów z formularza
    const title = form.title.value;
    const content = form.content.value;
    const color = form.color.value;
    const pinned = form.pinned.checked;
    const date = notes[index].date;
    
    //edycja notatki na podstawie indeksu
    notes[index] = { title, content, color, pinned, date };
    
    // Zapisanie tablicy w localStorage
    localStorage.setItem('notes', JSON.stringify(notes));
    
    // Renderowanie tabeli z notatkami
    renderTable();
  }

renderTable();
