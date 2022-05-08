const repeatString = function(string,num) {
    let i=0;
    let temp="";
    let text=string;
    if(num<0)
        return "ERROR";
    while(i<num) {
        temp+=text;
        i++;
    }
    return temp;
};

// Do not edit below this line
module.exports = repeatString;
