let notesList = document.getElementById('notesList');
let note = document.getElementById('note');
let button = document.getElementById('notebtn');
let btn1 = document.getElementById('btn1')
let body = document.getElementsByClassName('body')

let boolDark = true;
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
if(btn1) {
    btn1.addEventListener("click", (event) => {
        console.log("a");
        btn1.id = "btn2";
        boolDark = !boolDark;
        console.log(boolDark);
        if(boolDark == true) {
            body.id = "body";
        
        } else if(boolDark == false) {
            body.id = "body2";
        }
        
    })}