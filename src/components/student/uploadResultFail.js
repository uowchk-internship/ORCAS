import { Image, Button, Group } from '@mantine/core';


export default function UploadResultFail(props) {
    let setShowPopup = props.setShowPopup

    return (
        <>
            <div style={{ textAlign: 'center' }}>

                <Group position="center">
                    <Image src="/images/cancel.png" width={100} />
                </Group>

                <h1 style={{ fontSize: 50 }}>
                    Upload Failed! <br />Please try again!
                </h1>

                <Button style={{ backgroundColor: "#ed0a00", color: "#ffffff", borderRadius: 5 }}
                    position="center"
                    size="md"
                    onClick={() => setShowPopup(false)}
                >
                    Retry
                </Button>

            </div>
        </>
    );
}
