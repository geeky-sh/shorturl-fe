"use client";
import { useState } from "react"
import { getAccessToken } from "../utils/session"
import { useRouter } from "next/navigation";
import { SubmitURL } from "../utils/api";

export default function Create() {
    const router = useRouter()
    const [url, setUrl] = useState("")
    const [errMsg, setErrMsg] = useState("")

    const onChange = (e) => {
        setUrl(e.target.value)
    }

    const onSubmit = async(e) => {
        e.preventDefault()
        setErrMsg("")
        SubmitURL(url).then((res) => {
            if(res.status == 201) {
                router.push("/urls")
                return
            } else if (res.status == 401) {
                router.push("/login")
                return
            } else {
                res.json().then((result) => {
                    console.log(result)
                    setErrMsg(result["msg"])
                })
            }
        }, (err) => {console.error(err)})
    }


    return (
        <section className="bg-gray-100 font-serif">
            <div className="flex flex-col items-center justify-center h-screen">
                <h3 className="align-center text-xl mb-2 text-gray-900">Create Short URL</h3>
                <div className="p-4 bg-white border border-gray-100 min-w-80 rounded-md">
                    <form>
                        <div className="text-sm text-red-400 message">{errMsg}</div>
                        <div className="py-2">
                            <label for="url" className="py-2 text-base block text-gray-600">URL</label>
                            <input type="text" name="url" id="url" placeholder="URL"
                                className="text-base bg-gray-50 rounded-md p-1 w-full" value={url} onChange={onChange}/>
                        </div>
                        <button type="submit"
                            className="mt-2 p-2 bg-blue-500 rounded-md text-white text-base w-full"
                            onClick={onSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
