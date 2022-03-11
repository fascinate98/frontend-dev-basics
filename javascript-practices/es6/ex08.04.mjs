/**
 * named export I
 * exports(require.js)와 유사하다. 이 모듈을 import할때는 반드시 이름을 지정해야 한다.
 */

 export const add = function(a,b){
    return a+b;
 }
 
 export const subtract = function(a,b){
     return a-b;
  }
 
  export {add, subtract}