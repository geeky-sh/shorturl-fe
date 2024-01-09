export default function Page() {
    return (
        <section className="h-full">
            <div>
                <div className="flex flex-row items-center p-2 m-5">
                    <h3 className="text-gray-800 font-bold flex-1">List of Short URLs Created</h3>
                    <div className="flex-1">
                        <button className="p-2 bg-blue-500 rounded-md text-white text-sm">Create</button>
                    </div>
                </div>
                <table className="ml-5 w-full h-full text-sm text-left text-gray-600 m-auto">
                    <thead>
                        <tr className="border-b">
                            <th className="px-6 py-3">Short ID</th>
                            <th className="px-6 py-3">Original URL</th>
                            <th className="px-6 py-3">Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="px-6 py-3">xxxxxx</td>
                            <td className="px-6 py-3"><a href="https://www.google.com">https://www.google.com</a></td>
                            <td className="px-6 py-3">2 days ago</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-6 py-3">yyyyyy</td>
                            <td className="px-6 py-3"><a href="https://www.reddit.com">https://www.reddit.com</a></td>
                            <td className="px-6 py-3">3 days ago</td>
                        </tr>
                    </tbody>
                </table>


                <div class="ml-5 flex pt-5">
                    <a href="#" class="flex items-center justify-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md">
                        Previous
                    </a>

                    <a href="#" class="flex items-center justify-center p-1 ml-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md">
                        Next
                    </a>
                </div>

            </div>

        </section>
    )
}
