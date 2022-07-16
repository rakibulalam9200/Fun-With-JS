const arr=[1,2,3,4,5,6,7,8,9,10,11];

const chunkArray= (arr,n) =>{
    const newArr = [];
    while(arr.length>n){
        newArr.push(arr.splice(0,n))
    }
    if(arr.length > 0){
        newArr.push(arr)
    }
    return newArr;
}

const myArr = chunkArray(arr,3);
console.log(myArr);