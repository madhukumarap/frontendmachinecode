//what is backtraking
// Backtracking algorithms are like problem-solving strategies that help explore different options to find the best solution. They work by trying out different paths and if one doesn’t work, they backtrack and try another until they find the right one. It’s like solving a puzzle by testing different pieces until they fit together perfectly.
//backtraking the concept we use to find path of the destination 
// randmaization->we can choose random path
for (let i = index; i < nums.length; i++) {
    [nums[index], nums[i]] = [nums[i], nums[index]];  // Swap elements
    recurPermute(index + 1, nums);
    [nums[index], nums[i]] = [nums[i], nums[index]];  // Swap back to original
}