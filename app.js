let numbers = [0,1,2,3,4,5,6,7,8,9];
let phoneNumber= createPhoneNumber(numbers);

function createPhoneNumber(numbers){
  let numberStr = numbers.join("");
  let formatedNumber= `(${numberStr.slice(0,3)}) ${numberStr.slice(3,6)}-${numberStr.slice(6)}`;
  return formatedNumber;
 

}