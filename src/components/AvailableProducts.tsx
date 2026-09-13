import { useState } from "react";
import type { CardType } from "../types/CardType";
import ProductCard from "./ProductCard";

const mockProducts: CardType[] = [
    {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        title: "React",
        field: "Popular",
        description: "A declarative, component-based JavaScript library for building modern user interfaces.",
        sector: "Frontend",
        note: "Beginner-Friendly",
        rating: 4.9
    },
    {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
        title: "Vue.js",
        field: "Versatile",
        description: "An approachable, performant, and versatile framework for building web user interfaces.",
        sector: "Frontend",
        note: "Beginner-Friendly",
        rating: 4.8
    },
    {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg",
        title: "Svelte",
        field: "Fast",
        description: "Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.",
        sector: "Frontend",
        note: "Intermediate",
        rating: 4.8
    },
    {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        title: "Next.js",
        description: "The React framework for full-stack web applications with hybrid static & server rendering.",
        sector: "Frontend",
        note: "Intermediate",
        rating: 4.9
    },
    {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        title: "Node.js",
        field: "Standard",
        description: "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
        sector: "Backend",
        note: "Intermediate",
        rating: 4.8
    },
    {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        title: "PostgreSQL",
        field: "Top SQL",
        description: "A powerful, open-source object-relational database system with proven reliability.",
        sector: "Database",
        note: "Intermediate",
        rating: 4.9
    },
    {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
        title: "Redis",
        field: "Cache",
        description: "In-memory data structure store used as a high-speed database, cache, and message broker.",
        sector: "Database",
        note: "Intermediate",
        rating: 4.8
    },
    {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        title: "JavaScript",
        field: "Ubiquitous",
        description: "The versatile, ubiquitous scripting language powering dynamic behavior across the web.",
        sector: "Language",
        note: "Beginner-Friendly",
        rating: 4.9
    },
    {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        title: "TypeScript",
        field: "Essential",
        description: "A strongly typed programming language that builds on JavaScript for robust tooling.",
        sector: "Language",
        note: "Intermediate",
        rating: 4.9
    },
    {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        title: "Java",
        field: "Robust",
        description: "A secure, object-oriented programming language designed for portability and scale.",
        sector: "Language",
        note: "Intermediate",
        rating: 4.6
    },
    {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        title: "Tailwind CSS",
        field: "Modern",
        description: "A utility-first CSS framework packed with classes that can be composed to build custom UI.",
        sector: "Styling",
        note: "Beginner-Friendly",
        rating: 4.9
    },
    {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        title: "Docker",
        field: "Containers",
        description: "A platform designed to build, share, and run containerized applications reliably.",
        sector: "DevOps",
        note: "Intermediate",
        rating: 4.9
    }
];

const AvailableProducts = () => {
    const [stack, setStack] = useState<CardType[]>([]);

    const handleAdd = (product: CardType) => {
        if (!stack.find(p => p.title === product.title)) {
            setStack([...stack, product]);
        }
    };

    return(
        <div className="max-w-7xl mx-auto px-4 md:px-8 sm:px-12 py-10">
            <div className="flex flex-col justify-center items-center md:items-start px-2 mb-8">
                <h1 className='flex flex-row text-4xl md:text-4xl font-bold'>Explore The<div className='ml-2 text-[#DB4CAB]'>Technologies</div></h1>
                <p className="py-3 text-[18px] text-gray-400">Pick one technology per catagory to build you ideal stack</p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Products Grid */}
                <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockProducts.map((product, idx) => (
                        <ProductCard key={idx} product={product} onAdd={handleAdd} />
                    ))}
                </div>

                {/* selected-products */}
                <div className="lg:w-1/4 w-full border border-gray-100 rounded-3xl p-6 shadow-sm bg-white sticky top-6">
                    <h2 className="text-[20px] font-bold mb-1">Your Stack</h2>
                    <p className="text-gray-400 text-[14px] mb-6">
                        {stack.length === 0 ? "No technologies selected yet." : `Selected ${stack.length} technologies.`}
                    </p>
                    
                    {stack.length === 0 ? (
                        <div className="border border-dashed border-gray-200 rounded-2xl py-10 flex items-center justify-center text-gray-400 text-[14px]">
                            Your stack is empty.
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {stack.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                                        <img src={item.image} alt={item.title} className="w-6 h-6 object-contain" />
                                    </div>
                                    <span className="font-semibold text-gray-800 text-[15px]">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AvailableProducts;