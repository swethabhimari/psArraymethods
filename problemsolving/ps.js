// 1.sort an array of number

var arr=[5,2,7,99,100,-10,9,1,8,3,6,4,10]
largest=0
sorted=[]
for(i=0;i<arr.length;i++){
    if(largest<arr[i]){
        largest=arr[i];
    }
}
for(i=-largest;i<=largest;i++){
    for(j=0;j<arr.length;j++){
    if(i==arr[j]){
        sorted.push(arr[j])
    }
}
}
console.log("sorted array:",sorted);



// 2.find the second largest number in array

var arr=[2,6,30,117,9,1,7,3,8,20,113,120,5,4,25,10,100,119]
largest=0
seclar=0
for(i=0;i<arr.length;i++){
    if(largest<arr[i]){ 
        seclar=largest 
        largest=arr[i];
    }
    else if(arr[i] > seclar){ 
        seclar= arr[i];
    }
}
console.log("largest:",largest);
console.log("second largest:",seclar);

// count the positive and negitive numbers
a=0
positivecount=0
negativecount=0
var array=[2,-1,-5,9,-4,-3,6,7,8,-10]
for(i=0;i<array.length;i++){
    if(array[i]>a){
        positivecount+=1
    }
    else{
        negativecount+=1
    }
}
console.log("postive count :",positivecount);
console.log("negative count :",negativecount);