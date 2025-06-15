import { useState } from 'react';

export default function Home() {
  const [konu, setKonu] = useState('');
  const [mesaj, setMesaj] = useState('');

  const gonder = async () => {
    const res = await fetch('/api/gonder', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ konu }),
    });
    const data = await res.json();
    setMesaj(data.mesaj);
  };

  return (
    <main style={{ padding: 40 }}>
      <h1>Konu Gir</h1>
      <input
        type="text"
        value={konu}
        onChange={(e) => setKonu(e.target.value)}
        style={{ width: '300px', padding: '8px', marginRight: '10px' }}
      />
      <button onClick={gonder}>Gönder</button>
      {mesaj && <p>{mesaj}</p>}
    </main>
  );
}
