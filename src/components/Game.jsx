import { motion } from 'framer-motion';

export default function Game({
  color,
  colors,
  isCorrect,
  isIncorrect,
  handleChoice,
  handleReset,
}) {
  return (
    <>
      <div
        className="container w-2/4 rounded-2xl py-28 shadow-lg"
        style={{ background: color }}
      />

      <div className="container my-20 flex w-2/3 justify-center space-x-10">
        {colors.map((color) => (
          <button
            key={color}
            type="button"
            onClick={() => handleChoice(color)}
            className="w-1/4 rounded-lg bg-slate-600 p-4 px-6 text-center text-base font-semibold tracking-widest text-white shadow-md transition duration-200 ease-in hover:bg-slate-700"
            disabled={isCorrect}
          >
            {color}
          </button>
        ))}
      </div>
      {isCorrect && (
        <div>
          <motion.h2
            className="mx-auto mb-5 font-sans text-2xl tracking-widest"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            CORRECT
          </motion.h2>

          <motion.button
            type="button"
            className="mx-auto mb-5 flex rounded-full bg-slate-600 py-3 px-3 text-center text-base font-normal text-white shadow-md transition duration-200 ease-in hover:bg-slate-700"
            onClick={handleReset}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </motion.button>
        </div>
      )}

      {isIncorrect && (
        <motion.h2
          className="my-5 text-center align-middle font-sans text-2xl tracking-widest"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          TRY AGAIN!
        </motion.h2>
      )}
    </>
  );
}
