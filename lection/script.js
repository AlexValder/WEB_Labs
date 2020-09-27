//var x = 1;

//var y = x >= 0 ? "X is greater or equals 0" : "X is negative";

//alert(y);

alert("Wait...");

function isPrime(num) {
	for (var j = 2; j < num/2; j += 1) {
		if (num % j == 0) {
			return false;
		}
	}
	return true;
}

var oddSum = 1;

for (var i = 1; i <= 100; i += 1) {
	if (isPrime(i)) {
		oddSum += i;
		console.log(i);
	}
}

alert("Sum is " + oddSum);
