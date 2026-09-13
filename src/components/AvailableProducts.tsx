import type { CardType } from "../types/CardType";
import ProductCard from "./ProductCard";
import SelectedProducts from "./SelectedProducts";
import { useState } from "react";
import mockProductsData from "../../public/mockdata.json";

const mockProducts: CardType[] = mockProductsData as CardType[];

const AvailableProducts = () => {
    const [stack, setStack] = useState<CardType[]>([]);

    const handleAdd = (product: CardType) => {
        if (!stack.find((p) => p.Name === product.Name)) {
            setStack([...stack, product]);
        }
    };

    const handleRemove = (product: CardType) => {
        setStack(stack.filter((p) => p.Name !== product.Name));
    };

    return(
        <div className="max-w-7xl mx-auto px-4 md:px-8 sm:px-12 py-10">
            <div className="flex flex-col justify-center items-center md:items-start px-2 mb-8">
                <h1 className='flex flex-row text-4xl md:text-4xl font-bold'>Explore The<div className='ml-2 text-[#DB4CAB]'>Technologies</div></h1>
                <p className="py-3 text-[18px] text-gray-400">Pick one technology per catagory to build you ideal stack</p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Products Grid */}
                <div className="w-full lg:w-3/4 flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockProducts.map((product, idx) => (
                        <ProductCard key={idx} product={product} onAdd={handleAdd} />
                    ))}
                </div>
                <SelectedProducts stack={stack} onRemove={handleRemove} />
            </div>
        </div>
    )
}

export default AvailableProducts;