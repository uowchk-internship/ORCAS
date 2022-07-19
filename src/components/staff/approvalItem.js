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
                        <Button style={{ backgroundColor: "#0033FF", color: "#ffffff", borderRadius: 5, marginRight: 10 }}
                            position="center" compact size="md">
                            Approve
                        </Button>
                        <Button style={{ backgroundColor: "#ED0A00", color: "#FFFFFF", borderRadius: 5 }}
                            position="center" compact size="md" >
                            Reject
                        </Button>
                    </div>

                </td>
            </tr>
        </>
    )
}


