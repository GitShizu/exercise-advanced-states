import { useState } from "react";

export default () => {
  const [invitati, setInvitati] = useState([]);
  const [newGuest, setNewGuest] = useState("");
  const [messaggio, setMessaaggio] = useState("");

  return (
    <>
      <h3>Esrcizio 3</h3>
      <input
        type="text"
        value={newGuest}
        onChange={(e) => setNewGuest(e.target.value)}
      />
      <button
        onClick={() => {
          setInvitati([newGuest, ...invitati]);
          setNewGuest("");
        }}
      >
        Aggiungi
      </button>

      <ul>
        {invitati.map((invitato, i) => (
          <li key={`invitato${i}`}>
            {invitato}
            <button
              onClick={() => {
                const listaFiltrata = invitati.filter(
                  (elemento, indice) => indice !== i
                );
                setInvitati(listaFiltrata);
                setMessaaggio("");
              }}
            >
              Elimina
            </button>
            <button
              onClick={() => {
                setMessaaggio(`Ciao ${invitato}`);
              }}
            >
              Saluta
            </button>
          </li>
        ))}
      </ul>
      <p>{messaggio}</p>
    </>
  );
};
