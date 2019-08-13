const myList = document.getElementsByTagName('li');
for (let i = 0; i < myList.length; i++) {
  myList[i].style.color = 'purple';
}

const errorNotPurple = document.getElementsByClassName("error-not-purple");
for (let i = 0; i < errorNotPurple.length; i++) {
  errorNotPurple[i].style.color = 'red';
}


let typesOfInputsCanBeSelected = ['select','multiselect','textfield','textarea','checkbox','radiobuttons','number','email','color','date','telephone','fileupload'];
let variations =  [];
let brNodeElement = document.createElement('br');


let addButton = $('#add_button');
$('document').ready(() => {
  $('#temporary_holder').html('');  
  
  /*Ask the Element type*/
  let labelElementNode = document.createElement('label');
  labelElementNode.setAttribute('id','ask1')
  labelElementNode.innerText="Select The Type of input field";
  let askSelectElementNode = document.createElement('SELECT');
  askSelectElementNode.setAttribute('id','ask_the_option');
  typesOfInputsCanBeSelected.forEach((optValue)=>{
    let optionHtmlNodeElement = document.createElement('option')
    optionHtmlNodeElement.setAttribute('value',optValue);
    optionHtmlNodeElement.innerText= optValue;
    askSelectElementNode.append(optionHtmlNodeElement);
  })

  askSelectElementNode.setAttribute('id','ask_element_type');
  $('#temporary_holder').append(labelElementNode);
  $('#temporary_holder').append(askSelectElementNode);
  $('#temporary_holder').append(brNodeElement);
  /* Ask the Values/options of The Element*/
  let labelElement2Node = document.createElement('label');
  labelElement2Node.innerText= "Give the Values that can be present in the option type chosen";
  $('#temporary_holder').append(labelElement2Node);
  let askValuesElementsNode = document.createElement('input');
  askValuesElementsNode.setAttribute('type','text');
  askValuesElementsNode.setAttribute('id','ask_values_to_element2');
  $('#temporary_holder').append(askValuesElementsNode);
  $('#temporary_holder').append(document.createElement('br'));

  /* Ask the Custom Label Name of The Element*/
  let labelElement3Node = document.createElement('label');
  labelElement3Node.innerText= "Give The Custom Label Name";
  $('#temporary_holder').append(labelElement3Node);
  let askCustomLabelNode = document.createElement('input');
  askCustomLabelNode.setAttribute('type','text');
  askCustomLabelNode.setAttribute('id','ask_custom_label_name');
  $('#temporary_holder').append(askCustomLabelNode);
  $('#temporary_holder').append(document.createElement('br'));

  let labelElement4Node = document.createElement('label');
  labelElement4Node.innerText= "Give the placeholder if required";
  $('#temporary_holder').append(labelElement4Node);
  let placeholderCustomLabelNode = document.createElement('input');
  placeholderCustomLabelNode.setAttribute('type','text');
  placeholderCustomLabelNode.setAttribute('id','ask_custom_place_holder');
  $('#temporary_holder').append(placeholderCustomLabelNode);
  $('#temporary_holder').append(document.createElement('br'));
  
  /*createButton*/
  let addButtonCreator = document.createElement('button');
  addButtonCreator.setAttribute('id','add_button');
  addButtonCreator.innerText="Add";
  $('#temporary_holder').append(addButtonCreator);
  $('#temporary_holder').append(document.createElement('br'));  

  $('#add_button').click((e)=>{
    addButtonAdder();
  })

})

function addButtonAdder(){
  let optionName = $('#ask_element_type').val();
  let labelCustomName = $('#ask_custom_label_name').val();
  let valuesToTheOptionElement = $('#ask_values_to_element2').val();
  let values = valuesToTheOptionElement.split(',');
  let objectFormation = {
      option_custom_name: "",
      option_type: "",
      option_values: [],
      place_holder_value: ""
  };
  objectFormation['place_holder_value'] = $('#ask_custom_place_holder').val();
  objectFormation['option_custom_name'] = labelCustomName;
  objectFormation['option_type'] = optionName;
  if(values.length > 0){
    values.forEach((val)=>{
      objectFormation['option_values'].push(val);
    })
  }
  variations.push(objectFormation);
}




function buttonCreator(button){
  let label = button['label'];
  let buttonCss = button['css'];
  let buttonElement = document.createElement('button');
  buttonElement.setAttribute('value',label);
  return buttonElement
}

// when using both getElementsByClassName or getElementsByTagName you would have to add an [0] after to specify us to get the first element from the collection.

// look more into querySelectors and do not forget to use a . for class and a # for ID's example below
// How would you use querySelectorAll to obtain a reference to all elements in a document with the class student-info and assign it to the constant studentInfo?
// const studentInfo = document.querySelectorAll('.student-Info');

// The following two lines of code are functionally identical:
// const myElement = document.getElementById('myId');
// const myElement = document.querySelector('#myId');

// How would you select the first element in the DOM with its HTML title attribute set to "MyTitle"?
// document.querySelector('[title=MyTitle]')