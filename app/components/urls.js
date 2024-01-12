import Image from "next/image";
import Link from "next/link";

export default function URLs({urls}) {
    return (
        <section className="h-full font-serif">
            <div>
                <div className="flex flex-row items-center p-2 m-5">
                    <h3 className="text-gray-600 flex-1 text-2xl">List of Short URLs Created</h3>
                    <div className="flex-1">
                        <Link href="/create" className="p-2 bg-blue-500 rounded-md text-white text-base">Create</Link>
                    </div>
                </div>
                <div>
                    <table className="ml-5 w-full text-base text-left text-gray-600 m-auto">
                        <thead>
                            <tr className="border-b">
                                <th className="px-6 py-3">Short ID</th>
                                <th className="px-6 py-3">Original URL</th>
                                <th className="px-6 py-3">Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {urls && urls.map((obj, _) => {
                                let date = new Date(obj.created_at)
                                let short_url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${obj.code}`
                                return (
                                    <tr className="border-b" key={obj.id}>
                                        <td className="px-6 py-3">{obj.code}
                                        <Image src="/copy.png" width={20} height={20}
                                            alt="Copy" className="inline" title="copy"
                                            onClick={() => navigator.clipboard.writeText(short_url)}/></td>
                                        <td className="px-6 py-3"><a href={obj.url} className="text-blue-500">{obj.url}</a></td>
                                        <td className="px-6 py-3">{date.toUTCString()}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                {/* <div class="ml-5 flex pt-5">
                    <a href="#" class="flex items-center justify-center p-1 text-base text-gray-500 bg-white border border-gray-300 rounded-md">
                        Previous
                    </a>

                    <a href="#" class="flex items-center justify-center p-1 ml-2 text-base text-gray-500 bg-white border border-gray-300 rounded-md">
                        Next
                    </a>
                </div> */}

            </div>

        </section>
    )
}
