const list = document.querySelector("ol.items");
const item=document.querySelector(".take_input");
const add=document.querySelector("button.add");
const done=document.querySelector("button.done");

add.onclick=()=>{
  
    const node=document.createElement("li");
    const text=document.createElement("div");
    text.classList.add("text");
    const text_item=document.createTextNode(item.value);
    if(text_item.length>0){
        text.appendChild(text_item);
        node.appendChild(text);
        const actions=document.createElement("div");
        actions.classList.add("actions");
        const btn1=document.createElement("button");
        btn1.classList.add("edit");
        btn1.innerHTML="EDIT";
        const btn2=document.createElement("button");
        btn2.classList.add("del");
        btn2.innerHTML="DELETE";
        actions.appendChild(btn1);
        actions.appendChild(btn2);
       
        node.appendChild(actions);
        list.appendChild(node);
        item.value="";
    
        btn1.onclick=()=>{
            add.style.visibility="collapse";
            done.style.visibility="visible";
            item.value=text.textContent;
        
            done.onclick=()=>{
                const update=item.value;
                if(update.length>0){
                text.textContent=update;
                item.value="";
                add.style.visibility="visible";
                done.style.visibility="hidden";
            }
                else{
                     window.alert("Can not be empty,Your item will get delted.");
                     node.remove();
                }
             }
    }

        btn2.onclick=()=>{
            node.remove();
        }

}
else{
    window.alert("Add something");
}

}


