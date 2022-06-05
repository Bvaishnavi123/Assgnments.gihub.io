function toggler(a,b,c) {
    var arr=arguments;
    var index = 0;
    return function() {
        console.log(arr[index]);
        index++;
    }
}

var toggle = toggler(1,2,3)

toggle()

toggle()

toggle()