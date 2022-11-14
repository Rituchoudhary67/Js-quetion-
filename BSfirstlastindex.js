function BinarySearchFirstLastIndex(arr,target) {
  
    var left=0 , right=arr.length-1;
     var firstindex=-1;
       while(left<=right){   //l=0  r=-1
       let mid = left + Math.floor((right-left)/2);   //m=2--0
       if(( arr[mid]==target)) {  //0 && 5==1 f
      firstindex = mid;
       right = mid-1;
       
       // return mid;
       }
       else if (target > arr[mid]){    //8 >7  t
         left = mid + 1;      //l=3
       }
       else {
         right = mid - 1;
       }
   } 
   // return firstindex;
   
    var left =0, right=arr.length-1;  //l=0-3 r=5
    var lastindex = -1;    //li=-1
    while(left<=right){               //0<5 t
      let mid = left + Math.floor((right-left)/2);       //m=2--4
      if((arr[mid]==target)){  //f  8==8 && 8<5 t
       lastindex = mid;
       left = mid +1;
      
       // return mid;  //m=4
      }
      else if (target > arr[mid]){   //8>7 
        left = mid + 1;
      }
      else {
        right = mid -1;
      }
    }
   // return lastindex;
 
   return [firstindex,lastindex];
 } 
 console.log(BinarySearchFirstLastIndex([5,7,7,8,8,10],8))
   
   