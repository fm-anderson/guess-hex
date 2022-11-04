// libraries
import { motion } from 'framer-motion';

//assets
import trophy from '../assets/trophy.png';

export default function Congrats() {
  return (
    <div className="flex flex-col text-center">
      <span>
        <motion.img
          src={trophy}
          className="h-[350px] w-[350px] bg-amber-200 p-8"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 360],
            borderRadius: ['10%', '0%', '50%', '50%', '10%'],
          }}
          transition={{
            duration: 1.4,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
        />
        <button
          type="button"
          className="mx-auto mt-8 flex rounded-full bg-slate-600 py-3 px-3 text-center text-base font-normal text-white shadow-md transition duration-200 ease-in hover:bg-slate-700"
          onClick={() => {
            location.reload();
          }}
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
        </button>
      </span>
    </div>
  );
}
