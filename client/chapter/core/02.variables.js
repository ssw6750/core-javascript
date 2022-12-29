/* --------------------------------------------------------------------- */
/* Variables                                                             */
/* --------------------------------------------------------------------- */

let admin;
let name;
name = "jhon";
admin = name;

let ourPlanetName = 'Earth'
let currentUserName = "ssw"

console.log(admin)



/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기 - 변수
let calcProductQuantity;

// - 구매 제품 가격의 총 합 - 변수
let totalProductPrice;

// - 1년 기준 일(day)자 수 - 대 상수
const DAYS_PER_YEAR = 365;

// - 구매 결제 여부 - 변수
let isPayment = false;

// - 구매 결제 내역 - 변수
let paymentHistory;

// - 브랜드 접두사 - 대 상수
const BARND_PREFIX = "EUID";

// - 오늘의 운세 - 변수
let fortuneOfToday;

// - 상품 정보 - 대 상수
const productInfo = '';




/* variables ----------------------------------------------------------- */


/* constant variables -------------------------------------------------- */

/* 렉시컬 환경 (어휘적으로 쉽게 설명이 가능한... 예를들어 메모리)*/
/* 
  자바스크립트의 전역환경에서 변수를 지정하면 어휘적 환경이 구성된다.
  이때 var은 Object Environment Recode의 환경에서 구성되고
  let과 const는 Declarative Environment Record의 환경에서 구성된다.
*/
var nickName = 'tiger'
let nickName2 = 'tiger' //Temporal Dead Zone