import { Button } from '@mantine/core';

import { addViewCount } from '../../functions/materials'

export default function SearchItem(props) {
    let data = props.data

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
                            <b>{data.type}</b> | Year of Publish: <b>{data.publishYear}</b> | Views: <b>{data.views}</b><br/>
                            <b>{data.subject}</b>
                        </td>
                        <td>
                            <Button style={{ backgroundColor: "#001641", color: "#ffffff", borderRadius: 5 }}
                                position="center"
                                size="md"
                                onClick={() => {
                                    window.open(data.url, '_blank').focus();
                                    addViewCount(data)
                                }}>
                                Open in new tab
                            </Button>

                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}