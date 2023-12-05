import { useState } from "react";
import "./Form.css";

export default () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [isMale, setIsMale] = useState(true);
  const [selectedColor, setSelectedColor] = useState("rosso");
  const handleClick = () => {
    alert("Grazie!");
    console.log({
      email: { email },
      password: { pwd },
    });
  };

  return (
    <>
      <h3>Esrcizio 2</h3>
      <form action="">
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </label>

        <label>
          Maschio
          <input
            type="radio"
            name="gender"
            required
            checked={isMale}
            onChange={(e) => setIsMale(e.target.checked)}
          />
        </label>

        <label>
          Femmina
          <input
            type="radio"
            name="gender"
            checked={!isMale}
            onChange={(e) => setIsMale(!e.target.checked)}
          />
        </label>

        <label>
          Selezione il tuo colore preferito
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            <option value="rosso">ROSSO</option>
            <option value="verde">VERDE</option>
            <option value="blu">BLU</option>
          </select>
        </label>

        <button onClick={handleClick}>Registrati</button>
      </form>
    </>
  );
};
