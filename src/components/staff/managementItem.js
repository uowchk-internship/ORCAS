import { Button } from '@mantine/core';

export default function ApprovalItem(props) {
    const setShowDetailView = props.setShowDetailView

    return (
        <>
            <tr>
                <td>Topic name here</td>
                <td>
                    <div style={{ textAlign: "center" }}>
                        <Button style={{ backgroundColor: "#001641", color: "#ffffff", borderRadius: 5 }}
                            position="center" compact size="md"
                            onClick={() => setShowDetailView(true)}>
                            Show and edit details
                        </Button>
                    </div>
                </td>
                <td>
                    <b>Approved</b>
                </td>
                <td>
                    <div style={{ textAlign: "center" }}>
                        <Button style={{ backgroundColor: "#ED0A00", color: "#ffffff", borderRadius: 5 }}
                            position="center" compact size="md" color="red">
                            Remove
                        </Button>
                    </div>

                </td>
            </tr>
        </>
    )
}


