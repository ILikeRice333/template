export default function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background:
          "radial-gradient(circle at center, #2b1a00 0%, #120800 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        fontFamily: "Arial"
      }}
    >
      {/* glowing 67 */}
      <div
        style={{
          position: "absolute",
          fontSize: "35vw",
          fontWeight: 900,
          color: "rgba(255,208,0,0.08)",
          textShadow:
            "0 0 40px rgba(255,217,0,0.4), 0 0 80px rgba(255,217,0,0.3)"
        }}
      >
        67
      </div>

      {/* floating mangos */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "15%",
          fontSize: "3rem"
        }}
      >
        🥭
      </div>

      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "12%",
          fontSize: "3rem"
        }}
      >
        🥭
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "18%",
          left: "20%",
          fontSize: "3rem"
        }}
      >
        🥭
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "18%",
          fontSize: "3rem"
        }}
      >
        🥭
      </div>

      {/* center text */}
      <div
        style={{
          textAlign: "center",
          fontSize: "6rem",
          fontWeight: 900,
          color: "#ffd54a",
          textShadow:
            "0 0 10px #ffd000, 0 0 20px #ffd000, 0 0 40px #ffb300"
        }}
      >
        Mango + Mustard
      </div>
    </div>
  );
}
{/* floating mustard bottle images */}
<img
  src="https://cdn-icons-png.flaticon.com/512/3143/3143643.png"
  alt="mustard"
  style={{
    position: "absolute",
    top: "8%",
    right: "30%",
    width: "55px"
  }}
/>

<img
  src="https://cdn-icons-png.flaticon.com/512/3143/3143643.png"
  alt="mustard"
  style={{
    position: "absolute",
    top: "35%",
    left: "8%",
    width: "55px"
  }}
/>

<img
  src="https://cdn-icons-png.flaticon.com/512/3143/3143643.png"
  alt="mustard"
  style={{
    position: "absolute",
    bottom: "22%",
    right: "8%",
    width: "55px"
  }}
/>

<img
  src="https://cdn-icons-png.flaticon.com/512/3143/3143643.png"
  alt="mustard"
  style={{
    position: "absolute",
    bottom: "5%",
    left: "35%",
    width: "55px"
  }}
/>
