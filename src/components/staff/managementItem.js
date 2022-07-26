import { useState } from 'react'
import { Button, Modal, Group } from '@mantine/core';

import { removeMaterial } from '../../functions/admin'


export default function ApprovalItem(props) {
    const setShowDetailView = props.setShowDetailView
    const setDetailViewItem = props.setDetailViewItem
    const setNeedRefresh = props.setNeedRefresh

    let data = props.data
    let id = data.id

    const [showModal, setShowModal] = useState(false)
    const [removed, setRemoved] = useState(false)
    const [loading, setLoading] = useState(false)

    const confirmRemoveMaterial = async () => {
        setLoading(true)
        
        await removeMaterial(id)
        // data.id = 0
        setLoading(false)
        setRemoved(true)
        setNeedRefresh(true)
    }


    if (!removed) {
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
                                loading={loading}
                                onClick={() => setShowModal(true)}>
                                Remove
                            </Button>
                        </div>

                    </td>
                </tr>

                <Modal centered
                    opened={showModal}
                    onClose={() => setShowModal(false)}
                    withCloseButton={false}
                    title="Are you sure you want to remove this material?"
                >
                    <Group grow>
                        <Button style={{ backgroundColor: "#7A838B", color: "#ffffff", borderRadius: 5 }}
                            position="center" size="md" color="gray"
                            onClick={() => setShowModal(false)}>
                            Cancel
                        </Button>
                        <Button style={{ backgroundColor: "#ED0A00", color: "#ffffff", borderRadius: 5 }}
                            position="center" size="md" color="red"
                            onClick={() => {
                                confirmRemoveMaterial();
                                setShowModal(false)
                            }}>
                            Remove
                        </Button>

                    </Group>
                </Modal>
            </>
        )

    }
}


