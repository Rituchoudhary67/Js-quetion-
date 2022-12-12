// que. 
/*
You are given two integer arrays nums1 and nums2,sorted in non-decreasing
order, and two integers m and n, representing the number of elements in 
nums1 and nums2 respectively.
*/


nums1 = [5,12,78,90,100],nums2 = [1,3,5,6,12,46],m=4,n=2;
function mergeSort(nums1,num2,m,n){
  for(let i=0;i<n;i++){
    nums1[m+i] = nums2[i];
  }
  return nums1.sort((a,b) => {return a-b})
}
console.log(mergeSort(nums1,nums2,m,n))

