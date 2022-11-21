
// Sliding window  question....
// time complexity to O(n).
 
// arr= [ 2, 5, 6, -2 , 7, 3, 1 ]
// k is the collection of continous number it is give by que.
// let say k=3 
// [2,5,6] is sum =13 
// [5,6,-2] sum=9
// [6,-2,7] sum=11
// [-2,7,3] sum=8
// [7,3,1] sum=11

// method first.
function Slidingmaxsum (arr,k){    // refer line no 33
  let sum=0,maxsum=0;               //s=0         ms=0
  let i=0;                            //i=0-->1->2 -->3
  while (i<k){                        //0<3=T-->1<3=T-->2<3=t   --> 3<3 f
    sum=sum + arr[i];                 //s=0+2=2  -->s=2+5=7  --> s=7+6=13
    i++;                              //i=1-->2  -->3
  }
  maxsum=sum;                          //ms=13
  i=k;                                   //i=3=4
  while(i<arr.length){                       //3<7   t
    sum = sum + arr[i]- arr[i-k];  //9+7-5=11             //s= 13 + -2 -2 =9
    if(sum>maxsum){                              //9>13   f
      maxsum=sum;
    }
    i++;                           
  }
  return maxsum;                      // return maxsum
}
console.log(Slidingmaxsum([2, 5, 1, -5 , 7, 3, 1],3))


// method two.
let arr = [9,1,-3,5,1,-3,-7]
let k=3;
let sum=0,maxsum=0;
for(let i=0;i<k;i++){
  sum = sum+arr[i];
}
maxsum = sum;
for(let j=k ;j<arr.length;j++){
  sum = (sum+arr[j])-arr[j-k];
  maxsum = Math.max(maxsum,sum);
}
console.log(maxsum)


