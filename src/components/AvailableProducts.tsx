import type { CardType } from "../types/CardType";
import ProductCard from "./ProductCard";
import SelectedProducts from "./SelectedProducts";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';

const AvailableProducts = () => {
    const [stack, setStack] = useState<CardType[]>([]);
    const [products, setProducts] = useState<CardType[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/mockdata.json');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching data:", error);
                toast.error("Failed to load technologies.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleAdd = (product: CardType) => {
        if (!stack.find((p) => p.Name === product.Name)) {
            setStack([...stack, product]);
            toast.success(`Added ${product.Name} to stack!`);
        } else {
            toast.error(`${product.Name} is already in your stack!`);
        }
    };

    const handleRemove = (product: CardType) => {
        setStack(stack.filter((p) => p.Name !== product.Name));
        toast.info(`Removed ${product.Name} from stack.`);
    };

    const handleReset = () => {
        setStack([]);
        toast.info("Stack has been cleared.");
    };

    return(
        <div className="max-w-7xl mx-auto px-4 md:px-8 sm:px-12 py-10">
            <div className="flex flex-col justify-center items-center md:items-start px-2 mb-8">
                <h1 className='flex flex-row text-4xl md:text-4xl font-bold'>Explore The<div className='ml-2 text-brand-gradient'>Technologies</div></h1>
                <p className="py-3 text-[18px] text-gray-400">Pick one technology per catagory to build you ideal stack</p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Products Grid */}
                <div className="w-full lg:w-3/4 flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {isLoading ? (
                        <div className="col-span-full flex justify-center items-center py-20">
                            <span className="loading loading-spinner loading-lg text-brand-gradient"></span>
                            <span className="ml-3 font-semibold text-gray-500">Loading Technologies...</span>
                        </div>
                    ) : (
                        products.map((product, idx) => (
                            <ProductCard key={idx} product={product} onAdd={handleAdd} />
                        ))
                    )}
                </div>
                <SelectedProducts stack={stack} onRemove={handleRemove} onReset={handleReset} />
            </div>
        </div>
    )
}

export default AvailableProducts;