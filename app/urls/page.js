"use client";
import { useEffect, useState } from "react";
import URLs from "../components/urls";
import { useRouter } from "next/navigation";
import { GetURLs } from "../utils/api";

export default function Page() {
    const router = useRouter()
    const [urls, setUrls] = useState([])

    useEffect(() => {
        GetURLs().then((res) => {
            if (res.status == 200) {
                res.json().then((result) => {
                    console.log(result)
                    setUrls(result["results"])
                })
            } else if (res.status == 401) {
                router.push("/login")
            }
        }, (err) => {console.error(err)})
    }, [router])
    return (
        <URLs urls={urls}/>
    )
}
