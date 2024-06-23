let notes = []

let chenchingnote;

if (localStorage.getItem("notes") != null) {
    notes = JSON.parse(localStorage.getItem("notes"))
    add()
}

$(".AddNoteButton").on("click", function () {

    let title = $("#title").val()
    let text = $("#text").val()
    if(title == ""|| text == ""){
      alertify.error("Enter the text")
      ;
      return
    }
    let note = {
        title,
        text,
        date: new Date().getTime(),
        compl: false
    
    
    }
    notes.push(note)
    add()
    $("#title").val("")
    $("#text").val("")
})

function add() {
    localStorage.setItem("notes", JSON.stringify(notes))
    $(".Notes").empty()
    notes.forEach((m) => {
        $(".Notes").append(`
        <div class="Note ${m.compl?"on":"off"}">
        <div class="NoteTexts">
          <h2 class="NoteTitle">${m.title}</h2>
          <p class="NoteText">${m.text}</p>
          <h5>${new Date(m.date).toLocaleString()}</h5>
        </div>
        <div class="NoteButtons">
          <button onclick="com(${m.date})" class="CompleteButton"><i class="fa-solid fa-square-check"></i></button>
          <button onclick="red(${m.date})" class="RedactingButton"><i class="fa-solid fa-pencil"></i></button>
          <button onclick="del(${m.date})" class="DeleteButton"><i class="fa-solid fa-circle-xmark"></i></button>
        </div>

      </div>
        `)

    })
}

$("#clear").on("click", function () {
    notes = []
    add()
})

 function del(d){
  notes = notes.filter(elem => elem.date != d)
  add()
 }
 function com(d){
 let n = notes.find(elem => elem.date == d)
 n.compl = !n.compl
 add()
 }


 function red(d){
  $(".overlay").css(
    "display", "flex"
  )
 let n = notes.find(elem => elem.date == d)
$("#i").val(n.title)
$("#t").val(n.text)
chenchingnote= n
//  n.title = prompt("Змініть назву")
//  n.text = prompt("Змініть вміст")
  
 }

 function checking(){
  chenchingnote.title= $("#i").val()
  chenchingnote.text =$("#t").val()
  $(".overlay").css(
    "display", "none"
  )
  add()
 }


 









































// $(document).ready(function() {
// $(".")

// new Date().getTime()
// 
// localStorage.setItem("notes", JSON.stringify(data))
// JSON.parse(localStorage.getItem("notes"))

// });