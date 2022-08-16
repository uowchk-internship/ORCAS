import { useState } from 'react'
import { Button, Modal, Group } from '@mantine/core';

import { addViewCount } from '../../functions/materials'

export default function SearchItem(props) {
    let data = props.data
    let preview = props.preview

    const [showAbstract, setShowAbstract] = useState(false)
    const [subjects, setSubjects] = useState(data.subject !== undefined ? data.subject.split(',').map((item, i) => {
        return (<span key={i}>{item}{(i === data.subject.split(',').length - 1) ? "" : ", "}</span>)
    }) : [])

    return (
        <>
            <table className="noBorder">
                <tbody>
                    <tr>
                        <td style={{ width: "60%" }}><b>{data.topic}</b></td>
                        <td style={{ width: "40%" }}>{data.author}<br />{data.publisher}</td>
                    </tr>
                    <tr>
                        <td>
                            <b>{data.type}</b> | Year of Publish: <b>{data.publishYear}</b> | Views: <b>{data.views}</b><br />
                            <b>{subjects}</b>
                        </td>
                        <td>
                            <Group>
                                <Button style={{ backgroundColor: "#001641", color: "#ffffff", borderRadius: 5 }}
                                    position="center"
                                    size="md"
                                    onClick={() => setShowAbstract(true)}>
                                    Summary
                                </Button>

                                <Button style={{ backgroundColor: "#001641", color: "#ffffff", borderRadius: 5 }}
                                    position="center"
                                    size="md"
                                    onClick={() => {
                                        window.open(data.url, '_blank').focus();
                                        if (!preview) {
                                            addViewCount(data.id)
                                        }
                                    }}>
                                    Open in new tab
                                </Button>

                            </Group>
                        </td>
                    </tr>
                </tbody>
            </table>

            <Modal
                withCloseButton={false}
                size="xl"
                opened={showAbstract}
                onClose={() => setShowAbstract(false)}
            >
                <h2 style={{ fontSize: 40 }}><b>Summary</b></h2>
                <hr />
                {data.materialAbstract}
            </Modal>

        </>
    )
}