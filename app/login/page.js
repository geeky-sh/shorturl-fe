export default function Login() {
    return (
        <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center h-screen">
                <h3 className="align-center text-xl mb-2">Short URL Generator</h3>
                <div className="p-4 bg-white border border-gray-100">
                    <form>
                        <div className="py-1">
                            <label for="username" className="pr-5 text-sm">Username:</label>
                            <input type="username" name="username" id="username" placeholder="Your username" className="text-sm bg-gray-50 rounded-md p-1"/>
                        </div>
                        <div className="py-1">
                            <label for="password" className="pr-5 text-sm">Password:</label>
                            <input type="password" name="password" id="password" placeholder="Your password" className="text-sm bg-gray-50 rounded-md p-1"/>
                        </div>
                        <button type="submit" className="mt-2 p-2 bg-blue-500 rounded-md text-white text-sm">Login</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
