"use client";
import { useRouter } from "next/navigation"
import { isLoggedIn, logout } from "../utils/session"
import { useEffect, useState } from "react";

export default function Header() {
    const router = useRouter();
    const [loggedIn, setIsLoggedIn] = useState(false)

    function onClick() {
        logout()
        router.replace('/login')
    }

    useEffect(() => {
        if (isLoggedIn()) {
            setIsLoggedIn(true)
        }
    }, [])

    return (
        <header className="font-serif">
            <nav className="bg-gray-200">
                <div className="flex items-center p-4">
                    <div className="text-4xl flex-1 text-gray-700">
                        Short URL
                    </div>
                    {loggedIn && <div className="justify-items-end">
                        <button className="p-2 bg-blue-500 rounded-md text-white text-base" onClick={onClick}>Logout</button>
                    </div>}
                </div>
            </nav>
        </header>
    )
}
