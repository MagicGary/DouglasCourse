# Serialize and Deserialize Binary Tree

## Question

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Example: 

```
You may serialize the following tree:

    1
   / \
  2   3
     / \
    4   5

as "[1,2,3,null,null,4,5]"
```

Clarification: The above format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.


## Code
```python
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Codec:

    def serialize(self, root):
        """Encodes a tree to a single string.
        
        :type root: TreeNode
        :rtype: str
        """
        
        return self.seri(root, [])
    
    def seri(self, root, arr):
        if root is None:
            arr.append('None')
            return
        arr.append(root.val)
        self.seri(root.left, arr)
        self.seri(root.right, arr)
        
        return arr
    
    def deserialize(self, data):
        if data is None or len(data) == 0:
            return None
        
        if data[0] == 'None':
            data.pop(0)
            return None
        
        node = TreeNode(data.pop(0))
        node.left = self.deserialize(data)
        node.right = self.deserialize(data)
        
        return node
```