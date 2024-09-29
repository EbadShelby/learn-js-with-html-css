import { formatCurrency } from "../scripts/utils/money.js";

function testCurrency(testName, value1, value2) {
  console.log('| formatCurrency |');
  console.log(testName);
  if (formatCurrency(value1) === value2) {
    console.log('passed');
  } else {
    console.log('failed');
  }
}

testCurrency('converts cents into dollars',2095, '20.95'); // basic test

testCurrency('works with 0',0, '0.00'); // edge test
testCurrency('round up to the nearest cent',2000.5, '20.01');