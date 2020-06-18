// 将下面数组分别按从大到小以及从小到大进行排序后在console中输出
var arr1 = [43, 54, 4, -4, 84, 100, 58, 27, 140];

// 将数组从小到大排序
function upperNumbers(a, b){
	return a - b;
}
// 将数组从大到小排序
function lowerNumbers(a, b){
	return b - a;
}

// 将数组从小到大排序后在console中输出
console.log(arr1.sort(upperNumbers));
// 将数组从大到小排序后在console中输出
console.log(arr1.sort(lowerNumbers));


// 将下面数组分别按字母顺序a-z及z-a进行排序，在console中输出
var arr2 = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];

// 将数组从小到大排序后在console中输出
console.log(arr2.sort());
// 将数组从大到小排序后在console中输出
console.log(arr2.reverse());


var arr3 = [[10, 14], [16, 60], [7, 44], [26, 35], [22, 63]];

// 将上面的二维数组，按照每个元素中第二个数从大到小的顺序进行排序输出，输出结果应该为：
// [[22, 63], [16, 60], [7, 44], [26, 35], [10, 14]]
function lowerSecondNumber(a, b){
	return b[1] - a[1];
}
console.log(arr3.sort(lowerSecondNumber));


var arr4 = [
    {
        id: 1,
        name: 'candy',
        value: 40
    }, {
        id: 2,
        name: 'Simon',
        value: 50
    }, {
        id: 3,
        name: 'Tony',
        value: 45
    }, {
        id: 4,
        name: 'Annie',
        value: 60
    }
];

// 将上面数组分别按元素对象的value值从小到大进行排序后输出
function upperValue(a, b){
	return a.value - b.value;
}
console.log(arr4.sort(upperValue));