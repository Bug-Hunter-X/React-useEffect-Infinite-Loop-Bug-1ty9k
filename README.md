# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook.  The bug arises from an infinite loop caused by incorrectly using `useEffect` without specifying the correct dependencies.

## Bug Description
The provided `MyComponent` uses `useEffect` to increment a counter. Without specifying `count` in the dependency array, the effect runs every render, leading to an infinite loop and causing the application to crash or become unresponsive.

## Bug Solution
The solution involves adding `count` to the dependency array, ensuring that the effect runs only when `count` changes.  This is a classic React hook mistake easily fixed by a deeper understanding of the dependency array's behavior.