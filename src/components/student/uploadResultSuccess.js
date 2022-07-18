import { Image, Button, Group } from '@mantine/core';


export default function UploadResultSuccess() {
    return (
        <>
            <div style={{ textAlign: 'center' }}>

                <Group position="center">
                    <Image src="/images/checked.jpg" width={150} />
                </Group>
                <h1 style={{ fontSize: 50 }}>Upload Succeeded</h1>

                <br />

                <Button style={{ backgroundColor: "#ed0a00", color: "#ffffff", borderRadius: 5 }}
                    position="center"
                    size="md">
                    Close
                </Button>
            </div>
        </>
    );
}
