# Two Sum Solutions in JavaScript

This repository contains multiple solutions to the classic "Two Sum" problem, implemented in **JavaScript**. Each solution demonstrates a different approach with varying time and space complexities.

## 📝 Problem Statement

Given an array of integers `nums` and an integer `target`, return the indices of the two numbers that add up to `target`.

### Example:
```js
const nums = [4, 2, 11, 7, 15, 1, 3];
const target = 9;
// Expected output: [1, 3]
```

## 🚀 Solutions Implemented

### 1️⃣ **Brute Force Approach (O(n²))**
- Uses **nested loops** to check every possible pair.
- **Simple** but inefficient for large arrays.
- ✅ **Best when dealing with very small datasets.**
- **Implementation:** Loops through each element and checks every other element to find the correct pair.

### 2️⃣ **Hash Map Approach (O(n))**
- Uses an **object (hash map)** to store numbers and their indices.
- **Efficient** and works in a **single pass**.
- ✅ **Recommended for optimal performance.**
- **Implementation:** Stores visited numbers in a dictionary and finds the complement in one iteration.

### 3️⃣ **Two-Pointer Approach (O(n))** *(Requires Sorted Array)*
- Uses **two pointers** (start & end) to find the target sum.
- Requires **sorting** the array first, which takes O(n log n) time.
- ✅ **Useful when working with sorted data.**
- **Implementation:** Moves pointers towards the center to find the sum efficiently.

## 🛠 How to Run the Code
1. Clone the repository:
   ```sh
   git clone https://github.com/gala-kapralova/two-sum-solutions.git
   cd two-sum-solutions
   ```
2. Run the file using Node.js:
   ```sh
   node twoSum.js
   ```

## 🤝 Contributing
Feel free to **fork** this repository and contribute by adding new solutions or optimizations!

## 📜 License
This project is licensed under the **MIT License**.


