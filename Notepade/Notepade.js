const Addbtn = document.querySelector("#addbtn")
const wrap = document.querySelector(".wrapp")


const saveNote = () => {

    const Notes = document.querySelectorAll(".note textarea");
    console.log(Notes)
    const data = [];
    Notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    //console.log(data)

    // jb ek bhi textarea nhi h to koi bhi data nhi to vha locaStyore se delete ho jayega
    if (data.length === 0) {
        localStorage.removeItem("Notes")
    }
    // jb textarea me koi data hai to vha {object} ke from me save ho jayega
    else {

        localStorage.setItem("Notes", JSON.stringify(data))

    }

}

Addbtn.addEventListener("click",
    function () {
        addNote()
        alert("new note");
    }
)


const addNote = (text = "") => { // locastorge se data ayega esliye text
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML =
        `
        <div class="bg">
            <div class="icon">
                <img  class="save"   src="download.jfif" alt="" width="20px">
                <img  class="delete" src="OIP.jfif" alt="" width="20px">
            </div>
            <textarea>${text}</textarea> 
                `;
    // make a note
    wrap.appendChild(note);
    // note delet for
    note.querySelector(".delete").addEventListener(
        "click",
        function () {
            note.remove();
            saveNote();
        }
    )
    // note save
    note.querySelector(".save").addEventListener(
        "click",
        function () {

            alert("save")
            saveNote()

        }


    )
}

// apne app save ho jayega kucghtext lik diya to save btn click nhi kiya hai fir bhi

// note.querySelector("textarea").addEventListener(
//     "focusout",          // fousout is save in without user parmisson atuomatic
//     function () {
//         saveNote();
//     }
// )

// saveNote();

//}




// page lod hote hi check for this function
(
    function () {
        const localNotes = JSON.parse(localStorage.getItem("Notes"));//josn.parse :-object me change krta hai 
        //console.log(localNotes) :- localStorge me data save


        if (localNotes == null) {// localnote null h to ek phle se empty nlote rhegi
            addNote();
        }
        else {
            localNotes.forEach(
                (localNotes) => {
                    addNote(localNotes)
                }
            )
        }

    }
)()



