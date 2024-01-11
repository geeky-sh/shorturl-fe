import { getAccessToken } from "./session"

export async function SubmitLogin(username, password) {
    return fetch(
        getURL("users/login"),
        {
            method: 'POST',
            body: JSON.stringify({username: username, password: password}),
            headers: {
                'Content-Type': "application/json"
            }
        }
    )
}

export async function GetURLs() {
    return fetch(
        getURL(""),
        {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'Authorization': getAccessToken()
            }
        }
    )
}

export async function SubmitURL(url) {
    return fetch(
        getURL(""),
        {
            method: 'POST',
            body: JSON.stringify({url: url}),
            headers: {
                'Content-Type': "application/json",
                'Authorization': getAccessToken()
            }
        }
    )

}

function getURL(uri) {
    return `${process.env.NEXT_PUBLIC_BACKEND_URL}/${uri}`
}
