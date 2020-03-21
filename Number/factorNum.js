/*
Chúng ta có một số nguyên dương n. Mỗi một lần ta thay thế n bằng tổng các thừa số nguyên tố của nó (ví dụ 12=2*2*3 thì 12 sẽ được thay thế bằng số 2+2+3=7)

Chúng ta áp dụng phép toán này vào số hiện tại cho đến khi kết quả thu được giống vs số hiện tại

Cho một số tự nhiên, hãy tìm kết quả cuối cùng của phép toán trên.

Ví dụ:

Với n = 24, kết quả factorSum(n) = 5.
24 -> (2 + 2 + 2 + 3) = 9 -> (3 + 3) = 6 -> (2 + 3) = 5 -> 5.
Vì vậy kết quả trong trường hợp n = 24 là 5.

Đầu vào/Đầu ra

[Thời gian chạy] 0.5 giây

[Đầu vào] integer n

Điều kiện:
2 ≤ n ≤ 200.

[Đầu ra] integer
*/

function factorNum(n){
	let tmp = n, tong = 0;
	for(i = 2; i <= n; i++){
		while(n % i == 0){
			tong += i;
			n /= i;
		}
	}
	if(tmp == tong) return tong;
	else
		return factorNum(tong);
}

console.log(factorNum(24)); // 5
console.log(factorNum(35)); // 7
console.log(factorNum(156)); // 5
