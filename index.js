const febanachiArray = [1, 1]



function fibArr(n) {
	for ( var i = 1; i < n; i++) {
		console.log('Было ' + febanachiArray)
		var ArrayItemsPop = febanachiArray[i] + febanachiArray[i-1]
		febanachiArray.push(ArrayItemsPop)
		console.log( 'Стало ' + febanachiArray)
	}
}

fibArr(20)
