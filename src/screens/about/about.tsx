import horseUrl from "@assets/images/horse.png";

export default function About() {
  const handleClick = () => {
    alert("Click");
  };

  return (
    <>
      <h2>About</h2>
      <button onClick={handleClick}>Click</button>
      <img
        style={{
          maxWidth: "100%",
        }}
        src={horseUrl}
        alt="horse"
      />
    </>
  );
}
