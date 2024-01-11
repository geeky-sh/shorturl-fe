"use client";
import { useEffect, useState } from "react";
import URLs from "../components/urls";
import { getAccessToken } from "../utils/session";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter()
    const [urls, setUrls] = useState([])

    useEffect(() => {
        console.log("called")
        let promise = fetch("http://localhost:4000/", {
            method: 'GET', headers: {"content-type": "application/json", "Authorization": getAccessToken()}})
        promise.then((res) => {
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
