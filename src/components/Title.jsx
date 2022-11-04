import React from 'react';

export default function Title() {
  return (
    <>
      <h1 className="mt-10 text-center font-sans text-6xl font-extralight">
        GUESS HEX
      </h1>
      <p className="font-bolder font-sans text-3xl tracking-wider">
        # <span className="text-red-700">FF </span>
        <span className="text-green-700">FF </span>
        <span className="text-blue-700">FF </span>
      </p>

      <p className="font-bolder font-sans text-lg">
        0 - 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - A(10) - B(11) - C(12) - D(13) -
        E(14) - F(15)
      </p>
    </>
  );
}
