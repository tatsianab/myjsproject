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
$('.addButton').on('click',function(){
  onClickHandler();
});

function onClickHandler(){
  let input = document.querySelector('#todoInput');

  let value = input.value;
  let list = document.querySelector('.todoList');


  let newListElement = document.createElement('li'); //<li> </li>
  newListElement.innerHTML = value;

  list.appendChild(newListElement);

  input.value = '';

  console.log(value)
}
