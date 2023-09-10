const units = [
    "không",
    "một",
    "hai",
    "ba",
    "bốn",
    "năm",
    "sáu",
    "bảy",
    "tám",
    "chín",
];
const placeValues = ["", " mươi", " trăm", " nghìn", " triệu", " tỷ"];
const childPlaceValues = [""," nghìn", " triệu", " tỷ"];

function numberInWords(number) {
    let resultArray = [];
    let result = "";
    let stringNumber = number.toString();
    if (number === 0) {
        return "không";
    }
    while (stringNumber.length > 0) {
        resultArray.unshift(stringNumber.slice(-3));
        stringNumber = stringNumber.slice(0, -3);
    }
    resultArray.forEach(function(part, index){
        partResult = "";
        for(var i = 0; i < part.length; i++) {
            var digit = parseInt(part[i]);
            var unit = units[digit];
            if (part.length === 1) { 
                partResult += unit;
            }
            if (part.length === 2) { 
                if(digit === 0) {
                    if (i === 0) {
                        partResult += "";
                    } else if (i === 1) {
                        partResult += "";
                    }
                }
                if(digit !== 0) {
                    if (i === 0) {
                        partResult += unit + placeValues[1] + " ";
                    } else if (i === 1) {
                        partResult += unit;
                    }
                }
            }
            if(part.length === 3) { 
                if (i === 0) {
                    if (digit === 0) {
                        partResult += "";
                    } else {
                        partResult += unit + placeValues[2] + " ";
                    }
                }
                if (i === 1) {
                    if (digit !== 0) {
                        partResult += unit + placeValues[1] + " ";
                    }
                }
                if (i === 2) {
                    if (digit !== 0) {
                        partResult += unit;
                    }
                }
            }
        };
        if (partResult !== "") {
            partResult += childPlaceValues[resultArray.length - index - 1] + " ";
            result += partResult;
        }
    });
    return result.trim();
}


console.log(numberInWords(2400000000));