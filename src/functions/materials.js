const axios = require('axios');

export const getWithKeywordsAndStatus = async (status, keyword) => {
    let url = `https://tomcat.johnnyip.com/orcas/api/material/findByKeywordAndStatus/${status}/${keyword}`
    if (keyword === undefined || keyword === "") {
        url = `https://tomcat.johnnyip.com/orcas/api/material/findByApproveStatus/${status}`
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

export const addViewCount = async (data) => {
    data.views++;
    console.log("data: ")
    console.log(data)
    let url = `https://tomcat.johnnyip.com/orcas/api/material/`
    await axios.post(url,data)
        .then((response) => {})
        .catch((err) => {
            console.log(err);
        })
}