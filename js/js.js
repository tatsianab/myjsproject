$('.addButton').on('click',function(){
  addItemHandler();
});

function addItemHandler(){
  let inputValue = document.querySelector('#todoInput');
  let newEl = document.createElement('li');
  let newItem = document.createTextNode(inputValue.value);
  newEl.appendChild(newItem); 

  let newButtonElement = document.createElement('Button');
  newButtonElement.className = 'deleteButton';
  let textButton = document.createTextNode('DELETE ME');
  newButtonElement.appendChild(textButton);

  newButtonElement.addEventListener('click', function(){
    this.parentElement.remove();
  });

  newEl.appendChild(newButtonElement);

  document.querySelector('.todoList').appendChild(newEl);
  inputValue.value = '';

};





// // var firstName = 'Tatiana';
// // var array = [1,2,3,'123'];
// // var bool = true;
//
// var person = {
//   firstName: 'Tatiana',
//   lastName: '123',
//   obj: {
//     age: 20
//   }
// };
// // var arrayOfKeys = Object.keys(person);
//
// // let firstName;
// // const firstName = 'Oleh' ;
// // firstName = 'Tatiana';
// //
// // console.log( arrayOfKeys );
//
// // function myFunc( firstName ){
// //   // var myVar1 = 1;
// //   console.log( firstName );
// // }
// //
// // myFunc( 'Oleh' );
//               // 0        1           2
// let array = [ 'Oleh', 'John', 'Tatiana'];
//
// // // var i = 0;
// // // while (  i < array.length ){
// // //   console.log(array[i]);
// // //   i ++; //i = i + 1;
// // //   // i += 2; //i = i + 2;
// // //   //loop body
// // // }
// // //
// // // // for ( initialiazation ; condition ; increment) {
// // // //
// // // // }
// // // for( var i = 0; i < array.length; i ++;){
// // //   console.log(array[i]);
// // // }
// //
// var newArray = array.map( myMapFunction );
//
// function myMapFunction(element){
//   return element += '***';
// }
//
//
// // array.forEach( function(element, index) {
// //   array[index] += '!!!';
// // });
//
// console.log(array);
// console.log(newArray);
//
// // var numArray = [1, 34, 2, 6];
// // numArray.sort( function(a,b) { return a-b });
// // console.log(numArray);
// //
// // numArray.map( function(on))



