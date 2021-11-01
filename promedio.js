function averageCalculator(list){
    // let sumList = 0;
    // for(let i = 0; i < list.length; i++){
    //     sumList = sumList + list[i];
    // }
    const sumList = list.reduce(
        function(sumValue = 0, newElement) {
            return sumValue + newElement;
        }
    );
    const averageSum = sumList / list.length;
    return averageSum;
}

function medianCalculator(list){
    list.sort(function(a, b){return a-b});
    let halfSize = list.length / 2;
    let median = 0;
    if(list.length % 2 === 1){
        halfSize = halfSize - 0.5;
        median = list[halfSize];
    } else {
        median = (list[halfSize] + list[halfSize - 1]) / 2;
    }
    return median;
}

function modeCalculator(list){
    const listCount = {};

    list.map(
    function (element) {
        if (listCount[element]) {
        listCount[element] += 1;
        } else {
        listCount[element] = 1;
        }
    }
    );

    const listArray = Object.entries(listCount).sort(       //Convierte a array listCount
        function (elementA, elementB) {
            return elementB[1] - elementA[1];
        }
    );

    return mode = listArray[0];
}