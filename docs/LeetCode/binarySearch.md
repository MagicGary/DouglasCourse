# Binary Search 

## LeetCode 658 Find K closet elements 

1. question a bit hard to comprehend 

2. challenge is cannot think of all possible test cases 
    * it's good to think of right away what happens if x is out of bound 
    * __need to consider the case when x in in bound but does not exist in the list__
        * __when this happens, what to return__? 
    * locating x or returning the corrent index takes O(logN) time using binary search
    * filling K spots (finding K closest) takes O(K) time 

3. actual coding is not hard or tricky to understand as 
    * binary tree recursion
    * dynamic programming 
    * knowing when to use stack or queue
    * pointer manipulation on linkedlist 
    * coding techniques to remove duplicates


## LeetCode 162 Find Peak Element 

1. question might seem hard at first, but I did have a lead at the begining that it might need recursion 

2. coming up with the recursion algorithm is not challenging

3. biggest challenge is during recursion implementation
    * code was only able to return the value but not the index
    * __needed to pass in the entire array, but not the subarray__
    * __need to pass the processed index in rather than the global index__
    * wrong version
       ```python
       l = 0 
       r = len(arr)
       m = (l+r)/2

       leftSub = arr[l:m+1]
       leftResult = self.recurFind(leftSub)

       rightSub = arr[m:]
       rightResult = self.recurFind(rightSub)
       ```
    * correct version 
        ```python
        result = recurFind(arr, l, r)

        def recurFind(arr, l, r):
            m = (l+r)/2
            if m > target:
                newRight = m 
            if m < target:
                newLeft = m 
            leftResult = self.recurFind(arr, l, newRight)
            rightResult = self.recurFin(arr, newLeft, R)
        ```

4. reduce redundant code to help improve speed 

5. __did not think of a very important condition that helps improve speed__
    * do not check both left and right subarray because answer will definitely be in one of the two 

5. Next try to solve this using iteration