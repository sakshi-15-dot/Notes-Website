console.log("Welcome to notes making website!");
showNotes();

let btn=document.getElementById("addBtn");
btn.addEventListener("click",function(e)
{
    let notesObj;
    let getText=document.getElementById("FormControl");
    let addTitle=document.getElementById("addTitle");
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
         notesObj=[];
    }
    else{
         notesObj=JSON.parse(notes);
    }
    let myObj={
         title: addTitle.value,
         text: getText.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    getText.value="";
    addTitle.value="";
    console.log(notesObj);
    showNotes();


});
function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
         notesObj=[];
    }
    else{
         notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index){
        html+=` 
          <div class="card" style="width: 18rem; margin-left: 30px; margin-top: 10px;">
          <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text"> ${element.text}</p>
          <button id="${index}"onClick="deleteNote(this.id)" class="btn btn-primary">Delete note</button>
        </div>
      </div>`;

    });
    let notesElem=document.getElementById("notes");
    if(notesObj.length!=0){
          notesElem.innerHTML=html;
    }
    else{
        notesElem.innerHTML=`Nothing to show here right now!!`
    }
}
 function deleteNote(index){
    let notes=localStorage.getItem("notes");
    console.log("I am deleting node",index);
    if(notes==null)
    {
         notesObj=[];
    }
    else{
         notesObj=JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();

}
