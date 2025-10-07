let notesList = document.getElementById('notesList');
let note = document.getElementById('note');
let button = document.getElementById('notebtn');


if (button) {
    let trimmedText = note.value.trim();
    console.log(trimmedText); 

    button.addEventListener("click", async (e) => {
        let trimmedText = note.value.trim()
        if(trimmedText.length>0){
            let newNote = document.createElement("li");
            newNote.textContent = trimmedText;
            newNote.className = "notey"
            notesList.appendChild(newNote);
            await fetch('/submit-note', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({note: trimmedText})
            })
        }
    }
)}