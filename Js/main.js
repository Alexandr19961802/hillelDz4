let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch(true){
    case numOrStr===null:
        console.log("Вы прекратили")
        break
    case numOrStr.trim()==="":
        console.log("Пустая строка")
        break
        case isNaN(+numOrStr):
            console.log("Это не число")
            break
        default:
            console.log("Ок")
    }
