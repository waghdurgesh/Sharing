
const myform = document.querySelector('.for_form');
const Name = document.querySelector('#nm');
const Address = document.querySelector('#add');
const Hobbies = document.querySelector('#hob');
const List = document.querySelector('#list');
const Msg = document.querySelector('.msg');

var str = "<ul>";

AddObject = () => {
    document.getElementById("new").classList.remove("for_formREd");
    if (Name.value === "" || Address.value === "" || Hobbies.value === "") {
        alert("All Fields are required");
    } else if (Name.value.length >= 8) {
        alert("It should be less than SIX charachters!!!!!!!!!");
    }
    else {
        str += `<li> ${Name.value}  ${Address.value}  ${Hobbies.value} </li>`
        Name.value = '';
        Address.value = '';
        Hobbies.value = '';
    }
}
DisplayObject = () => {
    document.getElementById("new").classList.add("for_formREd");
    display();


}
display = () => {
    document.getElementById("output").innerHTML = str;

}