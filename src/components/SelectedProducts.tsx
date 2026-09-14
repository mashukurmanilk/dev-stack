import type { CardType } from "../types/CardType";
import { VscClose } from "react-icons/vsc";
interface SelectedProductsProps {
    stack: CardType[];
    onRemove: (product: CardType) => void;
    onReset: () => void;
}

export default function SelectedProducts({ stack, onRemove, onReset }: SelectedProductsProps) {

return (
  <div className="lg:w-1/4 w-full max-h-full border border-gray-100 rounded-3xl p-6 shadow-sm bg-white">
    <div className="flex justify-between items-center mb-1">
      <h2 className="text-[20px] font-bold">Your Stack</h2>
    </div>
    <p className="text-gray-400 text-[14px] mb-6">
      {stack.length === 0
        ? "No technologies selected yet."
        : `Selected ${stack.length} technologies.`}
    </p>

    {stack.length === 0 ? (
      <div className="border border-dashed border-gray-200 rounded-2xl py-10 flex items-center justify-center text-gray-400 text-[14px]">
        Your stack is empty.
      </div>
    ) : (
      <div className="space-y-4">
        {stack.map((item, idx) => (
          <div
            key={idx}
            className="flex border border-gray-300 h-12 rounded-xl items-center gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
              <img
                src={item.Icon}
                alt={item.Name}
                className="w-6 h-6 object-contain"
              />
            </div>
            <span className="font-semibold text-gray-800 text-[15px]">
              {item.Name}
            </span>
            <span className="ml-auto mr-4 cursor-pointer text-gray-400 hover:text-red-500">
              <VscClose onClick={() => onRemove(item)} />
            </span>
          </div>
        ))}
        {stack.length > 0 && (
         <button onClick={onReset} className="btn btn-wide rounded-xl bg-white border border-pink-600 text-pink-600">Remove All</button>
        )}
      </div>
    )}
  </div>
);
}
