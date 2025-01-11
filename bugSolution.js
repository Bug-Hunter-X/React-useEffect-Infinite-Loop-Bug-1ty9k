```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Now the effect will run only once on mount, because [] is empty.
    // Setting an interval to update count, which is a common use case.
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup function to prevent memory leak
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```