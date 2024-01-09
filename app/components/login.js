export default function Login() {
    return (
        <section className="bg-gray-100">
            <div className="flex flex-col items-center justify-center h-screen">
                <h3 className="align-center text-xl mb-2 text-gray-900">Short URL Generator</h3>
                <div className="p-4 bg-white border border-gray-100 min-w-80 rounded-md">
                    <form>
                        <div className="text-sm text-red-400 message">Informative Message</div>
                        <div className="py-2">
                            <label for="username" className="py-2 text-base block text-gray-600">Username:</label>
                            <input type="username" name="username" id="username" placeholder="Your username" className="text-base bg-gray-50 rounded-md p-1 w-full"/>
                        </div>
                        <div className="py-2">
                            <label for="password" className="py-2 text-base block text-gray-600">Password:</label>
                            <input type="password" name="password" id="password" placeholder="Your password" className="text-base bg-gray-50 rounded-md p-1 w-full"/>
                        </div>
                        <button type="submit" className="mt-5 p-2 bg-blue-500 rounded-md text-white text-base w-full">Login</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
