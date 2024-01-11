import { useEffect, useState } from "react"
import { isLoggedIn, login } from "../utils/session"
import { useRouter } from "next/navigation"
import { SubmitLogin } from "../utils/api"

export default function Login() {
    const router = useRouter()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errMsg, setErrMsg] = useState("")

    function onChangeUsername(e) {
        setUsername(e.target.value)
    }
    function onChangePassword(e) {
        setPassword(e.target.value)
    }

    const onClick = async(e) => {
        setErrMsg("")
        e.preventDefault()
        SubmitLogin(username, password).then((res) => {
            res.json().then((result) => {
                console.log(result)
                if(res.status == 200) {
                    login(result["access_token"])
                    router.push("/urls")
                } else {
                    setErrMsg(result["msg"])
                }

            })
        }, (err) => {console.error(err)})
    }
    return (
        <section className="bg-gray-100 font-serif">
            <div className="flex flex-col items-center justify-center h-screen">
                <h3 className="align-center text-xl mb-2 text-gray-900">Login</h3>
                <div className="p-4 bg-white border border-gray-100 min-w-80 rounded-md">
                    <form>
                        <div className="text-sm text-red-400 message">{errMsg}</div>
                        <div className="py-2">
                            <label for="username" className="py-2 text-base block text-gray-600">Username:</label>
                            <input type="username" name="username" id="username" placeholder="Your username"
                                className="text-base bg-gray-50 rounded-md p-1 w-full" onChange={(e) => onChangeUsername(e)}
                                value={username}/>
                        </div>
                        <div className="py-2">
                            <label for="password" className="py-2 text-base block text-gray-600">Password:</label>
                            <input type="password" name="password" id="password" placeholder="Your password"
                                className="text-base bg-gray-50 rounded-md p-1 w-full" onChange={(e) => onChangePassword(e)}
                                value={password}/>
                        </div>
                        <button type="submit" className="mt-5 p-2 bg-blue-500 rounded-md text-white text-base w-full"
                            onClick={onClick}>Login</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
