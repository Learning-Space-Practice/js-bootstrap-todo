// Function called while clicking add button
function add_item() {

    // Getting box and ul by selecting id;
    let item = document.getElementById("box");
    let list_item = document.getElementById("list_item");
    if(item.value !== ""){
    
        // Creating element and adding value to it
        let make_li = document.createElement("li");
        make_li.append(document.createTextNode(item.value));
    
        // Adding li to ul
        list_item.append(make_li);
    
        // Reset the value of box
        item.value=""
        
        // Delete a li item on click
        make_li.addEventListener('click', function(){
            console.log(this)
            this.remove(this);
        }) 
    
    }
    else{
    
        // Alert msg when value of box is "" empty.
        alert("plz add a value to item");
    }
    
    }
    