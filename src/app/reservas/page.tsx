"use client"
import { useState } from 'react';

const ReservaForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const reservationData = { name, email, date, time };

    const res = await fetch('https://clubsdepadelvalencia.es/wp-json/padel-reservas/v1/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reservationData),
    });

    if (res.ok) {
      alert('Reserva realizada con éxito');
    } else {
      alert('Error al realizar la reserva');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
        Reservar
      </button>
    </form>
  );
};

export default ReservaForm;
