import { Button } from '@mantine/core';
import { useState } from 'react'

import { saveMaterial } from '../../functions/materials'

export default function ApprovalItem(props) {
    const setShowDetailView = props.setShowDetailView
    const setDetailViewItem = props.setDetailViewItem
    let data = props.data
    const [updateView, setUpdateView] = useState(false)

    const saveStatus = async (option) => {
        data.status = option
        data.rankingMonth = ""
        setUpdateView(!updateView)
        await saveMaterial(data)
    }

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
                        <Button style={{ backgroundColor: "#0033FF", color: "#ffffff", borderRadius: 5, marginRight: 10 }}
                            position="center" compact size="md"
                            onClick={() => saveStatus("approve")}>
                            Approve
                        </Button>
                        <Button style={{ backgroundColor: "#ED0A00", color: "#FFFFFF", borderRadius: 5 }}
                            position="center" compact size="md"
                            onClick={() => saveStatus("reject")}>
                            Reject
                        </Button>
                    </div>

                </td>
            </tr>
        </>
    )
}


