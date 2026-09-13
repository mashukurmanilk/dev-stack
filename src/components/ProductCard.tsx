import type { CardType } from "../types/CardType"
import { FaStar } from "react-icons/fa";

export interface ProductCardProps {
    product: CardType;
    onAdd: (product: CardType) => void;
}

export default function ProductCard({product, onAdd}: ProductCardProps) {
    const {image, title, field, description, sector, note, rating} = product;
    
    return(
        <div className="border border-gray-100 md:max-w-[800px] md:w-[320px] rounded-3xl p-6 bg-white flex flex-col">
            <div className="flex justify-between items-start mb-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-50">
                    <img src={image} alt={title} className="w-8 h-8 object-contain" />
                </div>
                {field && (
                    <span className={`px-3 py-1 rounded-full text-[13px] font-medium 
                        ${field === 'Popular' ? 'bg-sky-50 text-sky-500' : 
                          field === 'Versatile' ? 'bg-emerald-50 text-emerald-500' : 
                          field === 'Fast' ? 'bg-orange-50 text-orange-500' : 
                          field === 'Standard' ? 'bg-emerald-50 text-emerald-500' : 
                          field === 'Top SQL' ? 'bg-sky-50 text-sky-500' : 
                          field === 'Cache' ? 'bg-red-50 text-red-500' : 
                          field === 'Ubiquitous' ? 'bg-amber-50 text-amber-500' : 
                          field === 'Essential' || field === 'Robust' || field === 'Containers' ? 'bg-sky-50 text-sky-500' : 
                          field === 'Modern' ? 'bg-cyan-50 text-cyan-500' : 
                          'bg-gray-100 text-gray-500'}`}>
                        {field}
                    </span>
                )}
            </div>
            
            <h3 className="text-[22px] font-bold text-gray-900 mb-2">{title}</h3>
            
            <p className="text-gray-400 text-[14px] leading-relaxed mb-3 grow">{description}</p>
            
            <div className="flex items-center gap-3 mb-3">
                <span className="bg-slate-100 text-gray-600 px-3 py-1 rounded-lg text-[13px] font-medium">{sector}</span>
                <span className="text-gray-400 text-[13px] font-medium">{note}</span>
                <div className="ml-auto flex items-center text-[13px] font-bold text-gray-800">
                    <FaStar className="text-yellow-400 mr-1.5 mb-0.5" />
                    {rating}
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