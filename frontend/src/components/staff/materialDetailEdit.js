import { useState, useEffect } from 'react'
import Datetime from 'react-datetime';
import moment from 'moment';
import { Chips, Chip, createStyles, Button, Modal, SegmentedControl, Group } from '@mantine/core';

import UploadResultFail from '../student/uploadResultFail';
import UploadResultSuccess from '../student/uploadResultSuccess';

import { saveMaterial } from '../../functions/admin'

const useStyles = createStyles((theme, _params, getRef) => ({
    iconWrapper: {
        ref: getRef('iconWrapper'),
    },

    checked: {
        backgroundColor: `#001641 !important`,
        color: theme.white,

        [`& .${getRef('iconWrapper')}`]: {
            color: theme.white,
        },
    },
}));


export default function MaterialDetailEdit(props) {
    moment().format();

    let detailViewItem = props.detailViewItem;

    const { classes } = useStyles();

    const [showPopup, setShowPopup] = useState(false);
    const [submittable, setSubmittable] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(true);


    //Form values
    const [email, setEmail] = useState((detailViewItem.email !== undefined) ? detailViewItem.email : "")
    const [topic, setTopic] = useState((detailViewItem.topic !== undefined) ? detailViewItem.topic : "")
    const [author, setAuthor] = useState((detailViewItem.author !== undefined) ? detailViewItem.author : "")
    const [publishYear, setPublishYear] = useState(moment(new Date()).year((detailViewItem.publishYear !== undefined) ? detailViewItem.publishYear.toString() : ""))
    const [publisher, setPublisher] = useState((detailViewItem.publisher !== undefined) ? detailViewItem.publisher : "")
    const [subjects, setSubjects] = useState((detailViewItem.subject !== undefined) ? detailViewItem.subject.split(",") : [])
    const [types, setTypes] = useState((detailViewItem.type !== undefined) ? detailViewItem.type : "")
    const [url, setUrl] = useState((detailViewItem.url !== undefined) ? detailViewItem.url : "")
    const [abstract, setAbstract] = useState((detailViewItem.materialAbstract !== undefined) ? detailViewItem.materialAbstract : "")
    const [status, setStatus] = useState((detailViewItem.status !== undefined) ? detailViewItem.status : "")

    const submitForm = async () => {
        setLoading(true)

        let data = {
            id: detailViewItem.id,
            email: email,
            topic: topic,
            author: author,
            publishYear: (publishYear.format('YYYY') !== undefined) ? publishYear.format('YYYY') : publishYear.getFullYear,
            publisher: publisher,
            subject: subjects.toString(),
            type: types.toString(),
            url: url,
            views: detailViewItem.views,
            status: status,
            materialAbstract: abstract
        }

        let result = await saveMaterial(data)
        if (result === "done") {
            setSuccess(true)
        } else {
            setSuccess(false)
        }
        setShowPopup(true)
        setLoading(false)

    }

    useEffect(() => {
        //Check if all required fields are entered by user.
        if (email !== "" &&
            topic !== "" &&
            subjects.length !== 0 &&
            types !== "" &&
            url !== "" &&
            abstract !== "") {
            setSubmittable(true)
        }

    })


    return (
        <>
            <form>
                <label htmlFor="se">Student Email: <span style={{ color: "#ED0A00" }}>*</span></label>
                <input type="text" id="se"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="topic">Topic: <span style={{ color: "#ED0A00" }}>*</span></label>
                <input type="text" id="topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                />

                <label htmlFor="author">Author:</label>
                <input type="text" id="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />

                <label htmlFor="datepicker">Publish year: <span style={{ color: "#ED0A00" }}>*</span></label>
                <Datetime
                    initialViewMode="years"
                    dateFormat="YYYY" timeFormat={false}
                    value={publishYear}
                    input={false}
                    onChange={(e) => setPublishYear(e)}
                />

                <label htmlFor="publisher">Publisher:</label>
                <input type="text" id="publisher"
                    value={publisher}
                    onChange={(e) => setPublisher(e.target.value)}
                />

                <label >Subject: (you can choose more than one) <span style={{ color: "#ED0A00" }}>*</span></label>

                <Chips value={subjects} onChange={setSubjects} multiple size="md" radius="sm" classNames={classes}>
                    <Chip value="Science & Technology">Science & Technology</Chip>
                    <Chip value="Arts & Humanities">Arts & Humanities</Chip>
                    <Chip value="Social Science">Social Science</Chip>
                    <Chip value="Business">Business</Chip>
                    <Chip value="Others">Others</Chip>
                </Chips>
                <br />

                <label >Resources Type: (you can choose more than one) <span style={{ color: "#ED0A00" }}>*</span></label>
                <Chips value={types} onChange={setTypes} size="md" radius="sm" classNames={classes}>
                    <Chip value="Journal Article">Journal Article</Chip>
                    <Chip value="Newspaper Article">Newspaper Article</Chip>
                    <Chip value="Video">Video</Chip>
                </Chips>
                <br />

                <label htmlFor="link">
                    Link: <span style={{ color: "#ED0A00" }}>*</span><br />
                    Your link must include "https://" or "http://" at the beginning.
                </label>
                <input type="text" id="link"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />

                <label htmlFor="abstract">
                    Abstract: <span style={{ color: "#ED0A00" }}>*</span><br />
                </label>
                <textarea id="abstract" rows="4"
                    value={abstract}
                    onChange={(e) => setAbstract(e.target.value)}
                />


                <p style={{ color: "#ED0A00" }}>
                    Reminder: <br />
                    Please input one link per upload only. <br />
                    Please double check link is valid before submission.<br />
                </p>

                <Group position="center">
                    <SegmentedControl
                        fullWidth
                        size="md"
                        value={status}
                        onChange={setStatus}
                        data={[
                            { label: 'Pending', value: 'pending' },
                            { label: 'Approve', value: 'approve' },
                            { label: 'Reject', value: 'reject' },
                        ]}
                    />
                </Group> <br />

                <div style={{ textAlign: "center" }}>
                    <Button style={{ backgroundColor: (submittable) ? "#001641" : "", color: "#ffffff", borderRadius: 5 }}
                        position="center"
                        size="md"
                        loading={loading}
                        disabled={!submittable}
                        onClick={() => submitForm()}>
                        Submit
                    </Button>
                </div>
                <br /><br />
            </form>

            <Modal
                withCloseButton={false}
                size="xl"
                opened={showPopup}
                onClose={() => setShowPopup(false)}
            >
                {(success) ?
                    <UploadResultSuccess setShowPopup={setShowPopup} /> :
                    <UploadResultFail setShowPopup={setShowPopup} />
                }
            </Modal>
        </>
    );
}
