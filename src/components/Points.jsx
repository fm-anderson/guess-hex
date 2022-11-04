import React from 'react';

export default function Points({ points }) {
  return (
    <div className="mb-4 text-center">
      <p className="text-lg font-light">Target: 10 points</p>
      <p className="font-sans text-lg font-bold">SCORE: {points}</p>
    </div>
  );
}
