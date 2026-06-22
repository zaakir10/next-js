export default function TimePage() {
  return (
    <div>
      <h1>Server Time</h1>
      <p>{new Date().toLocaleTimeString()}</p>
    </div>
  );
}