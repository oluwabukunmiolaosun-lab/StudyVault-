async function loadNotes() {

    const response = await fetch("data/notes.json");
    const notes = await response.json();

    const container = document.getElementById("notes-container");

    notes.forEach(note => {

        container.innerHTML += `
        <div class="lesson-card">
            <h3>${note.subject} - ${note.title}</h3>
            <p>${note.description}</p>
            <a href="#">Read Lesson</a>
        </div>
        `;

    });

}

loadNotes();
