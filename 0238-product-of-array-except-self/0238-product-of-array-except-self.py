class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        prefix = [1] * n
        postfix = [1] * n
        solution = [0] * n


        for i in range(1, n):
            prefix[i] = prefix[i -1] * nums[i - 1]
        
        for i in range(n-2, -1, -1):
            postfix[i] = postfix[i + 1] * nums[i + 1]

        for i in range(n):
            solution[i] = prefix[i] * postfix[i]

        return solution