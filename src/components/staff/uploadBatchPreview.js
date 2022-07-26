import SearchItem from '../student/searchItem'
import { useState } from 'react'
import { Button, Group } from '@mantine/core';

import { saveMaterial } from '../../functions/materials'

export default function BatchUploadPreview(props) {
    let data = props.data
    let setShowPreview = props.setShowPreview
    let setSuccess = props.setSuccess
    let setShowPopup = props.setShowPopup

    const [submitLoading, setSubmitLoading] = useState(false);

    const submitForm = async () => {
        setSubmitLoading(true)

        for (const item of data) {
            await saveMaterial(item)
        }

        setShowPreview(false)
        setShowPopup(true)
        setSuccess(true)
    }

    return (
        <>
            <h2 style={{ fontSize: 30 }} >Batch Upload Preview </h2><br />
            <hr />

            {(data !== undefined) ?
                [...data].map((item, i) => {
                    return <SearchItem preview={true} data={item} key={i} />
                }) : <></>}

            <hr />
            <Group position="center">
                <Button style={{ backgroundColor: "#001641", color: "#ffffff", borderRadius: 5 }}
                    position="center"
                    size="md"
                    onClick={() => setShowPreview(false)}>
                    Cancel
                </Button>
                <Button style={{ backgroundColor: "#001641", color: "#ffffff", borderRadius: 5 }}
                    position="center"
                    size="md"
                    loading={submitLoading}
                    onClick={() => submitForm()}>
                    Submit
                </Button>

            </Group>
        </>
    )
}