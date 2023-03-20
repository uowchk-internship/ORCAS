const axios = require('axios');

export const getWithKeywordsAndStatus = async (status, keyword) => {

    let url = process.env.REACT_APP_SERVER_URL + `/api/material/findByKeywordAndStatus/${status}/${keyword}`
    if (keyword === undefined || keyword === "") {
        url = process.env.REACT_APP_SERVER_URL + `/api/material/findByApproveStatus/${status}`
    }

    let result = [];
    await axios.get(url)
        .then((response) => {
            if (response.status == 200) {
                result = response.data
            } else {
                result = []
            }
        })
        .catch((err) => {
            console.log(err);
            result = []
        })

    return result
}

export const getAllMaterials = async () => {
    let url = process.env.REACT_APP_SERVER_URL + `/api/material/all`

    let result = [];
    await axios.get(url)
        .then((response) => {
            if (response.status == 200) {
                result = response.data
            } else {
                result = []
            }
        })
        .catch((err) => {
            console.log(err);
            result = []
        })

    return result
}

export const getRandomMaterials = async (kind) => {
    let url = process.env.REACT_APP_SERVER_URL + `/api/material/random/${kind}`

    let result = [];
    await axios.get(url)
        .then((response) => {
            if (response.status == 200) {
                result = response.data
            } else {
                result = []
            }
        })
        .catch((err) => {
            console.log(err);
            result = []
        })

    return result
}




export const addViewCount = async (id) => {
    let url = process.env.REACT_APP_SERVER_URL + `/api/material/addCount/${id}`
    await axios.post(url)
        .then((response) => { })
        .catch((err) => {
        })
}

export const saveMaterial = async (data) => {
    let result = ""
    let url = process.env.REACT_APP_SERVER_URL + `/api/material/new`
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

