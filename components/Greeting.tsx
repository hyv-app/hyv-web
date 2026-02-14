"use client"

import { FC } from "react"

interface IGreetingProps {
    name?: string;
    isHome?: boolean;
}

const Greeting: FC<IGreetingProps> = ({ name, isHome = false }) => {
    const getGreeting = () => {
        const hour = new Date().getHours();

        if (hour < 12) {
            return <>Good <span className="font-medium">Morning 🌅</span></>
        } else if (hour < 18) {
            return <>Good <span className="font-medium">Afternoon ☀️</span></>
        } else {
            return <>Good <span className="font-medium">Evening 🌙</span></>
        }
    }

    return (
        <div className="flex items-center gap-2">
            <div className="h-1 w-10 bg-lime-400 rounded-full" />
            <div className={`text-2xl/[1.2] xs:text-3xl/[1.2] lg:text-4xl/[1.2] tracking-tight w-fit text-trim ${isHome && "lg:text-normal"}`}>
                {isHome && name && name.length > 0 ? (
                    <>👋🏻 Hello <span className="font-medium">{name}</span></>
                ) : (
                    getGreeting()
                )}
            </div>
        </div>
    )
}

export default Greeting;