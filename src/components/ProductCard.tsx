import type { CardType } from "../types/CardType"
import { FaStar } from "react-icons/fa";

export interface ProductCardProps {
    product: CardType;
    onAdd: (product: CardType) => void;
}

export default function ProductCard({product, onAdd}: ProductCardProps) {
    const {Icon, Name, Badge, Description, Category, Difficulty, Rating} = product;
    
    return(
        <div className="w-[288px] h-[285px] rounded-2xl bg-white border border-gray-100 shadow-sm p-6 flex flex-col">
            <div className="flex justify-between items-start w-full mb-3">
                <div className="flex w-10 h-10 justify-center items-center">
                    <img src={Icon} alt={Name} className="w-full h-full object-contain" />
                </div>
                {Badge && (
                    <span className={`px-[10.4px] py-[1.89px] flex flex-col items-start rounded-full text-[12px] font-medium border 
                        ${Badge === 'Popular' ? 'bg-sky-50 text-sky-500 border-sky-100' : 
                          Badge === 'Versatile' ? 'bg-emerald-50 text-emerald-500 border-emerald-100' : 
                          Badge === 'Fast' ? 'bg-orange-50 text-orange-500 border-orange-100' : 
                          Badge === 'Standard' ? 'bg-emerald-50 text-emerald-500 border-emerald-100' : 
                          Badge === 'Top SQL' ? 'bg-sky-50 text-sky-500 border-sky-100' : 
                          Badge === 'Cache' ? 'bg-red-50 text-red-500 border-red-100' : 
                          Badge === 'Ubiquitous' ? 'bg-amber-50 text-amber-500 border-amber-100' : 
                          Badge === 'Essential' || Badge === 'Robust' || Badge === 'Containers' ? 'bg-sky-50 text-sky-500 border-sky-100' : 
                          Badge === 'Modern' ? 'bg-cyan-50 text-cyan-500 border-cyan-100' : 
                          'bg-gray-100 text-gray-500 border-gray-200'}`}>
                        {Badge}
                    </span>
                )}
            </div>
            
            <h3 className="w-full text-[#0F172A] text-[18px] font-bold leading-[28px] mb-2">{Name}</h3>
            
            <p className="w-full text-[#64748B] text-[12px] font-normal leading-[19.5px] mb-3 grow">{Description}</p>
            
            <div className="flex items-center gap-3 mb-3">
                <span className="bg-slate-50 text-slate-600 px-2 py-1 rounded-md text-[11px] font-medium">{Category}</span>
                <span className="text-gray-400 text-[11px] font-medium">{Difficulty}</span>
                <div className="ml-auto flex items-center text-[11px] font-bold text-slate-700">
                    <FaStar className="text-yellow-400 mr-1.5 mb-0.5" />
                    {Rating}
                </div>
            </div>
            
            <button 
                onClick={() => onAdd(product)}
                className="w-full bg-[#0B1120] hover:bg-gray-800 text-white font-medium py-3 rounded-xl transition-colors text-[15px]">
                Add to Stack
            </button>
        </div>
    )
}