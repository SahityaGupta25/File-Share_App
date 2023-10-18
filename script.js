const dropzone = document.querySelector('.drop-zone')

//^ Added Event (Drag Over) Listener to dropzone

dropzone.addEventListener("dragover",(e)=>{
    console.log('dragging');
    if(!dropzone.classList.contains("dragged")){
        
        dropzone.classList.add('dragged');
    }
})

//^ Added Event (Drag Leave) Listener to dropzone

dropzone.addEventListener("dragleave",(e)=>{
    dropzone.classList.remove('dragged')
})