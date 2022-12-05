// Count Negative Numbers in a Sorted Matrix
// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.



function grid(arr) {
    let count=0;
    for(let i=0;i<arr.length;i++){
      for(let j=0;j<arr[i].length;j++){
        if(arr[i][j]<0){
          count++;
        }
        
      }
      
      
    }
  return count;
  }
  // console.log(grid([2,7,4,5]))
  console.log(grid([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))
  
  