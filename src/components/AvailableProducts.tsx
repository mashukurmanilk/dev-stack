import { useState } from "react";
import type { CardType } from "../types/CardType";
import ProductCard from "./ProductCard";

const mockProducts: CardType[] = [
    {
        Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        Name: "React",
        Badge: "Popular",
        Description: "A declarative, component-based JavaScript library for building modern user interfaces.",
        Category: "Frontend",
        Difficulty: "Beginner-Friendly",
        Rating: 4.9
    },
    {
        Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
        Name: "Vue.js",
        Badge: "Versatile",
        Description: "An approachable, performant, and versatile framework for building web user interfaces.",
        Category: "Frontend",
        Difficulty: "Beginner-Friendly",
        Rating: 4.8
    },
    {
        Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg",
        Name: "Svelte",
        Badge: "Fast",
        Description: "Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.",
        Category: "Frontend",
        Difficulty: "Intermediate",
        Rating: 4.8
    },
    {
        Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        Name: "Next.js",
        Description: "The React framework for full-stack web applications with hybrid static & server rendering.",
        Category: "Frontend",
        Difficulty: "Intermediate",
        Rating: 4.9
    },
    {
        Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        Name: "Node.js",
        Badge: "Standard",
        Description: "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
        Category: "Backend",
        Difficulty: "Intermediate",
        Rating: 4.8
    },
    {
        Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        Name: "PostgreSQL",
        Badge: "Top SQL",
        Description: "A powerful, open-source object-relational database system with proven reliability.",
        Category: "Database",
        Difficulty: "Intermediate",
        Rating: 4.9
    },
    {
        Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
        Name: "Redis",
        Badge: "Cache",
        Description: "In-memory data structure store used as a high-speed database, cache, and message broker.",
        Category: "Database",
        Difficulty: "Intermediate",
        Rating: 4.8
    },
    {
        Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        Name: "JavaScript",
        Badge: "Ubiquitous",
        Description: "The versatile, ubiquitous scripting language powering dynamic behavior across the web.",
        Category: "Language",
        Difficulty: "Beginner-Friendly",
        Rating: 4.9
    },
    {
        Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        Name: "TypeScript",
        Badge: "Essential",
        Description: "A strongly typed programming language that builds on JavaScript for robust tooling.",
        Category: "Language",
        Difficulty: "Intermediate",
        Rating: 4.9
    },
    {
        Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        Name: "Java",
        Badge: "Robust",
        Description: "A secure, object-oriented programming language designed for portability and scale.",
        Category: "Language",
        Difficulty: "Intermediate",
        Rating: 4.6
    },
    {
        Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        Name: "Tailwind CSS",
        Badge: "Modern",
        Description: "A utility-first CSS framework packed with classes that can be composed to build custom UI.",
        Category: "Styling",
        Difficulty: "Beginner-Friendly",
        Rating: 4.9
    },
    {
        Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        Name: "Docker",
        Badge: "Containers",
        Description: "A platform designed to build, share, and run containerized applications reliably.",
        Category: "DevOps",
        Difficulty: "Intermediate",
        Rating: 4.9
    }
];

const AvailableProducts = () => {
    const [stack, setStack] = useState<CardType[]>([]);

    const handleAdd = (product: CardType) => {
        if (!stack.find(p => p.Name === product.Name)) {
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
                                        <img src={item.Icon} alt={item.Name} className="w-6 h-6 object-contain" />
                                    </div>
                                    <span className="font-semibold text-gray-800 text-[15px]">{item.Name}</span>
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