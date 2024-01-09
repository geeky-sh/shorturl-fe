export default function Header() {
    return (
        <header className="font-serif">
            <nav className="bg-gray-200">
                <div className="flex items-center p-4">
                    <div className="text-4xl flex-1 text-gray-700">
                        Short URL
                    </div>
                    <div className="justify-items-end">
                        <button className="p-2 bg-blue-500 rounded-md text-white text-base">Logout</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}
