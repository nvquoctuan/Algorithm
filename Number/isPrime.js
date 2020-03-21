/*
Một số nguyên tố là một số tự nhiên lớn hơn 1 và không thể tạo thành từ tích của hai số tự nhiên nhỏ hơn.

Ví dụ số 2, 3, 5 được gọi là số nguyên tố

Viết một hàm xác định xem một số nguyên dương đã cho có phải là số nguyên tố hay không.

Ví dụ

Với n = 47, đầu ra là isPrime(n) = true
Với n = 4, đầu ra là isPrime(n) = false

Đầu vào/Đầu ra

[giới hạn thời gian chạy] 0.5 seconds

[đầu vào] integer n

Điều kiện tiền đề:
0 ≤ n ≤ 1000.

[đầu ra] boolean

true nếu n là số nguyên tố, false nếu không phải.
*/
function isPrime(n){
	if(n < 2) return false;
	for(i = 2; i < n; i++) if(n % i == 0) return false;
	return true;
}

console.log(isPrime(4)); // false;
console.log(isPrime(47)); // true;
console.log(isPrime(133)); // false;
console.log(isPrime(120)); // false;
