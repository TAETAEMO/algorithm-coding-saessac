// 문제16 : 로꾸거

// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

// 입출력
const n = prompt('입력하세요.');

const reverseString = n.split('').reverse().join('');
console.log(reverseString);
// 입력 : 거꾸로
// 출력 : 로꾸거