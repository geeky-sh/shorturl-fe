const KEY_ACCESS_TOKEN = "AT"

export function isLoggedIn() {
    let access_token = getAccessToken()
    return access_token != null
}

export function logout() {
    localStorage.removeItem(KEY_ACCESS_TOKEN)
}

export function login(access_token) {
    localStorage.setItem(KEY_ACCESS_TOKEN, access_token)
}

export function getAccessToken() {
    return localStorage.getItem(KEY_ACCESS_TOKEN)
}
