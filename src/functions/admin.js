const axios = require('axios');
import * as XLSX from 'xlsx';

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

    console.log("Posted")
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

export const csvHandler = async (file) => {
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data).Sheets["Sheet1"];
    console.log(workbook);

    let fileJson = XLSX.utils.sheet_to_json(workbook);
    console.log(fileJson);

    let jsonObjects = []
    for (let item of fileJson) {

        let data = {
            id: 0,
            email: "admin",
            topic: item.topic,
            author: item.author,
            publishYear: item.publishYear,
            publisher: item.publisher,
            subject: item.subject,
            type: item.type,
            url: item.url,
            views: 0,
            status: "approve",
            materialAbstract: item.abstract
        }

        jsonObjects.push(data)
    }

    return jsonObjects
}