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
                    Approved
                </td>
                <td>
                    <div style={{ textAlign: "center" }}>
                        <Button style={{ backgroundColor: "#FFFFFF", color: "#0033FF", borderRadius: 5, marginRight: 10 }}
                            position="center" compact size="md" variant="outline">
                            Approve
                        </Button>
                        <Button style={{ backgroundColor: "#ffffff", color: "#ED0A00", borderRadius: 5 }}
                            position="center" compact size="md" variant="outline" color="red">
                            Reject
                        </Button>
                    </div>

                </td>
            </tr>
        </>
    )
}


