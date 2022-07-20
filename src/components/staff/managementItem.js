import { Button } from '@mantine/core';
import { useState } from 'react'

import { removeMaterial } from '../../functions/materials'

export default function ApprovalItem(props) {
    const setShowDetailView = props.setShowDetailView
    const setDetailViewItem = props.setDetailViewItem
    let data = props.data

    const [removed, setRemoved] = useState(false)

    const removeMaterial = async () => {
        let response = confirm("Are you sure to remove this material?")
        if (response) {
            data.id = 0
            setRemoved(true)
        }
    }


    if (data.id !== 0) {
        return (
            <>
                <tr>
                    <td>{data.topic}</td>
                    <td>
                        <div style={{ textAlign: "center" }}>
                            <Button style={{ backgroundColor: "#001641", color: "#ffffff", borderRadius: 5 }}
                                position="center" compact size="md"
                                onClick={() => {
                                    setShowDetailView(true)
                                    setDetailViewItem(data)
                                }}>
                                Show and Edit Details
                            </Button>
                        </div>
                    </td>
                    <td>
                        <b>{data.status.charAt(0).toUpperCase() + data.status.substring(1)}</b>
                    </td>
                    <td>
                        <div style={{ textAlign: "center" }}>
                            <Button style={{ backgroundColor: "#ED0A00", color: "#ffffff", borderRadius: 5 }}
                                position="center" compact size="md" color="red"
                                onClick={() => removeMaterial()}>
                                Remove
                            </Button>
                        </div>

                    </td>
                </tr>
            </>
        )

    }
}


