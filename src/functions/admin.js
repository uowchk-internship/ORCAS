const axios = require('axios');

import { saveJWT, getJWT } from './cookies';

export const removeMaterial = async (id) => {
    let result = ""
    let url = `https://tomcat.johnnyip.com/orcas/api/admin/delete/${id}`
    await axios.get(url)
        .then((response) => {
            if (response.status == 200) {
                result = "done"
            } else {
                result = "fail"
            }
        })
        .catch((err) => {
            console.log(err);
            result = "fail"
        })
    return result
}

export const saveMaterial = async (data) => {
    let result = ""
    let url = `https://tomcat.johnnyip.com/orcas/api/admin/update`
    await axios.post(url, data)
        .then((response) => {
            if (response.status == 200) {
                result = "done"
            } else {
                result = "fail"
            }
        })
        .catch((err) => {
            console.log(err);
            result = "fail"
        })
    return result
}

export const login = async (username, password) => {
    let result = ""
    let body = {
        username: username,
        password: password
    }

    axios.defaults.headers.common['Authorization'] = ""

    let url = `https://tomcat.johnnyip.com/orcas/login`
    await axios.post(url, body)
        .then((response) => {
            if (response.status == 200) {
                console.log(response.data)
                result = response.data
                axios.defaults.headers.common['Authorization'] = result
                saveJWT(result)
            } else {
                result = "fail"
            }
        })
        .catch((err) => {
            console.log(err);
            result = "fail"
        })

    return result
}

export const logout = () => {
    saveJWT("Bearer ")
    axios.defaults.headers.common['Authorization'] = ""
}

export const checkLoginStatus = async () => {
    let JWTFromCookie = getJWT();
    console.log("JWT: " + JWTFromCookie)
    axios.defaults.headers.common['Authorization'] = JWTFromCookie

    let result = false
    let url = `https://tomcat.johnnyip.com/orcas/api/admin/check`
    await axios.get(url)
        .then((response) => {
            if (response.status == 200) {
                console.log("status: logged in")
                result = true
            } else {
                result = false
            }
        })
        .catch((err) => {
            console.log(err);
            result = false
        })

    return result

}
