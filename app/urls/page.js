export default function Page() {
    return (
        <section className="h-full">
            <div className="text-center">
                <h3 className="p-5 text-gray-800 font-bold">List of Short URLs Created</h3>
                <table className="w-full h-full text-sm text-left text-gray-600 mt-5">
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
            </div>

        </section>
    )
}
