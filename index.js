document.addEventListener("DOMContentLoaded", ()=>{
    let app = document.querySelector("#app");
    
    app.querySelector("button.add").addEventListener('click', evt => {
        
        const noteUid = "note-"+( document.querySelectorAll(".note").length + 1 );
        
        let newNote = document.createElement("div");
        newNote.classList.add("note");
        newNote.innerHTML=`
                <label for="noteText">
                    <p>Todo:</p>
                    <input type="text" value="" placeholder="Todo" name="${noteUid}"/>
                </label>
                <button class="delete">Delete</button>
            `;       

        let notes = document.querySelector(".notes");
        notes.insertAdjacentElement("beforeend", newNote);

        document.querySelectorAll("button.delete").forEach( button => {
            button.addEventListener('click', evt => {
                if ( ( document.querySelectorAll(".note").length ) > 1 ) {
                    evt.target.parentElement.remove();
                }
            })
        })
    })
})