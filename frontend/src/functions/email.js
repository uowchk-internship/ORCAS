const axios = require('axios');

export const sendEmail = async (data) => {
    let result = ""
    let url = `https://${process.env.SERVER_URL}/api/email/send`
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

