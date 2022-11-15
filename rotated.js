// Input: nums = [4,5,6,7,0,1,2], target = 2
//               0 1 2 3 4 5 6
// Output: 4

// arr[4,5,6,7,8,9,1,2,3] target=3
//     0 1 2 3 4 5 6 7 8

// left=0 , right=arr.length-1=6;      l=0,r=8
// mid = 3                             m=4
// arr[mid]=7 arr[mid+1]=0             8 , 9    
// arr[mid] > arr[mid+1]    {4,5,6,7,8} {9,1,2,3}
// {4,5,6,7} {0,1,2}
// l=4 r=5                   l=5 r=8
// m=4                       m=6
// arr[mid]=0 == target t    

// mid++



function rotated(arr,target) {
    let left=0,right=arr.length-1;         //l=0,r=
    while(left<=right){
      let mid = left + Math.floor((right-left)/2);
      if(arr[mid]==target ){
        return mid;
      }
      else if (arr[mid] >= arr[left]){
        if(target <= arr[mid] && target>=arr[left]){
          right = mid -1;
        }
        else {
          left = mid+1;
        }
      }
      else {
        if(target >=arr[mid] && target <=arr[right]){
          left = mid + 1;
        }
        else {
          right = mid - 1;
        }
      }
    }
    return -1;
  }
  console.log(rotated([4,5,6,7,0,1,2],0))
  
  
  
  
  
  
  
  
  
  
  
  