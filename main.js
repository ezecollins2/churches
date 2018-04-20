var churchList = document.getElementById("churchList");
var form = document.getElementById("addForm");
var filter = document.getElementById('filter')

//Add and EventListener
form.addEventListener('submit', addChurch);
churchList.addEventListener('click', removeChurch);
filter.addEventListener('keyup', filterChurches);


//AddChurch function
function addChurch(e){
    e.preventDefault();

    //Creating a new church
    var newChurch = document.getElementById('church').value;
    
    //Create a new li
    var li = document.createElement('li');
    //Add classes to the Li
    li.className = 'list-group-item';
    //Create a text Element
    li.appendChild(document.createTextNode(newChurch));
    //Create the deleteBtn for the newChurch
    var deleteBtn = document.createElement('button')
    //Add classes to the deleteBtn
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //Append Text Node X to the deleteBtn
    deleteBtn.appendChild(document.createTextNode('X'))
    //Append deleteBtn to li
    li.appendChild(deleteBtn)
    //Append li to churchList
    churchList.appendChild(li);
}

//Create the removeChurch function
function removeChurch(e){
    //Check if the class list has a class of delete
    if(e.target.classList.contains('delete')){
        //check to confirm if you really whant to delete before deleting
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            churchList.removeChild(li);
        }
    }
}

//Creating the filter churches
function filterChurches(e){
    //convert the input texts to lowercase
    var text = e.target.value.toLowerCase();
    //Get the Li's
    var churches = churchList.getElementsByTagName('li')
    //To loop through the HTML collects, you convert it to Arrays form
    Array.from(churches).forEach(function(church){
        var churchName = church.firstChild.textContent;
        //Check if it matches with the var text
        if(churchName.toLowerCase().indexOf(text) != -1){
            church.style.display = 'block';
        }else{
            church.style.display = 'none';
        }
    })

}