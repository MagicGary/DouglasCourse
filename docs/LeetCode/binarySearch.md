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
    * if ``arr[m] < arr[m+1]``, there must be a peak in the right subarray. beacause if not then right subarray in stricly increasing 
    so the boundary ``arr[n]`` must be larger than ``arr[n-1]``and therefore n is a peak
    * similarly, 
        * claim: __if ``arr[m] < arr[m-1]``, then there must be a peak in the left subarray.__ 
        * proof: suppose there does not exist a peak in the left subarray, then therefore for each i in left subarray where i > 0 and less than or equal to m-1, ``arr[i-1] > arr[i]`` i.e. strictly decreasing. and hence, `arr[0] > arr[1]` and therefore `arr[0]` is a peak. 
        * since we have proved that if `arr[m] < arr[m+1] or arr[m] > arr[m-1]`, there must exist a peak in either left or right subarray. so we can search in either one of the subarray. 
        * if both `arr[m] < arr[m+1] and arr[m] < arr[m-1] are not true` then `arr[m] > arr[m+1] and arr[m] > arr[m-1]`, then `arr[m]` is a peak

5. Solve this using iteration
    * __To solve in iteration think about condition 5__
    1. if ``arr[m] < arr[m+1]`` go to right subarray, i.e. `` l = m `` 
    2. if ``arr[m] < arr[m-1]`` go to left subarray,  i.e. `` r = m ``
    3. stop when left meets right and return the bigger one 

## LeetCode 240 Search 2D Matrix II 

1. It's a simple question but I started off trying to find a more efficient solution, but too many __test cases__ proved this algorithm wrong. 

2. Most often seen solution is row-by-row binary search. Which is really easy to do. 

3. I tried to do a 2-pass binary search and it doesn't work for many of the test cases .

4. Maybe try a zig-zag binary search? 
        nope, that won't work either 
    ```python
    [
        [1,2,3,7,8,9],
        [5,10,14,16,19],
        [8,10,18,19,23],
        [9,12,22,24,29]
    ]
    ```
    if want to find 22, the only way is to do a row-by-row binary search

5. There is another way which is more optimal and time complexity is ``O(m+n)``. 
    * uses elimination method 

6. The challenge of this one:
    1. really more of thinking of using an __Optimal Algorithm__, if didn't have the algorithm right at first place, it will end up wasting 1 hour because the solution fails at **some test cases**

    2. if it is just simply implementing a __sub-optimal__ algorithm using __row-by-row binary search__, there is really nothing difficult about that part. 

    3. even thoug labeled as a __binary search__ problem, the optimal algorithm has nothing to do with **binary search**, it's more of a **linear exclusion** problem, 


## LeetCode 887 Super Egg Drop (Fun and Hard)

1. Not a binary search problem, more of a **number theory mathematics problem** needs to be implemented using **Dynamic Programming** to improve efficiency 

2. [See a really good explanation here](https://brilliant.org/wiki/egg-dropping/)


## LeetCode 33, search in rotated array
### Important Takes:
1. Start from simple and easy solution, make sure it passes all test cases then try to improve it. Because improved algorithm can be hard to detect mistakes.
2. For simple stupid edge cases, i.e. `len(arr)  = 1` or `len(arr) = 3` or even `len(arr) = 3`, do not to bother to mess with the algorithm to include these stupid trivial cases, it screws up the algorithm. Write these special case out. 

### Notes
1. spent a lot time on it      
2. main reason is had the initial algorithm correct right away, but was too sleepy to think straight that made the question must harder than it was.
3. initial thought was to find out pivot point and cut the array to left and right sub 
    * question abuot this was if pass in the subarray then won't get correct index out
    * should have thought of passing the entire array and pivot incides right away but went somewhere more complicated 
    * neglected a very important finding that 
        1. **the pivot point left array and the pivot point right array are both strictly increasing**
    * neglected the importance of locatinog the pivot point 
    * and some edge cases made it more confusing 
4. if got really confused and had to pick up the previous wrong thinking to debug it might be better off to just delete this whole thing and start over 

5. and wanted to find for result while looking for pivot which made the implementation more confusing at the begining 

## LC 81, search in rotated Array II (array allows duplicates)
1. same concept as the previous one, same algorithm to find the pivot 
    * had some doubt about the algorithm 
    * wrote some mathematical proofs but 
    * didn't have enough time or necessacity to prove the algorithm
    * more of just purely pattern finding and any edge case could shake the confidence towards the algo
2. spent some time to debug (30 minutes). 
    * made a small typo and had to doubt twice about the algorithm
    * even though the algorithm to find pivot was correctly implemented at first place
3. the only catch is when array is `[1,1,1,1,1,1,1,2,1,1,1,1,1]` i.e. when `array[first] == arr[middle] == arr[last]`
    * in this case the only way to find the pivot would be `O(N)`time, no way a binary search would work here
    * so just perform a linear serch for the target right away. 


        

            
    

