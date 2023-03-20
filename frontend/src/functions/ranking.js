const axios = require('axios');

export const getMonths = async () => {

    let url = `https://${process.env.SERVER_URL}/api/ranking/allRankings`

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