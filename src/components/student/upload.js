import { useState } from 'react'
import Datetime from 'react-datetime';
import { Chips, Chip, createStyles, Button, Modal, Group } from '@mantine/core';

import UploadResultFail from './uploadResultFail';
import UploadResultSuccess from './uploadResultSuccess';

import { saveMaterial } from '../../functions/materials'

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


export default function UploadComponent() {
  const { classes } = useStyles();

  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(true);

  //Form values
  const [email, setEmail] = useState("")
  const [topic, setTopic] = useState("")
  const [author, setAuthor] = useState("")
  const [publishYear, setPublishYear] = useState(new Date())
  const [publisher, setPublisher] = useState("")
  const [subjects, setSubjects] = useState([])
  const [types, setTypes] = useState([])
  const [url, setUrl] = useState("")

  const submitForm = async () => {
    setLoading(true)

    let data = {
      id: 0,
      email: email,
      topic: topic,
      author: author,
      publishYear: (publishYear.format('YYYY') !== undefined) ? publishYear.format('YYYY') : publishYear.getFullYear,
      publisher: publisher,
      subject: subjects.toString(),
      type: types.toString(),
      url: url,
      views: 0,
      status: "pending"
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

  const resetForm = () => {
    setEmail("")
    setTopic("")
    setAuthor("")
    setPublisher("")
    setPublishYear(new Date())
    setSubjects([])
    setTypes([])
    setUrl("")
  }

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

        <label >Resources Type: (choose one) <span style={{ color: "#ED0A00" }}>*</span></label>
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

        <p style={{ color: "#ED0A00" }}>
          Reminder: <br />
          Please input one link per upload only. <br />
          Please double check link is valid before submission.<br />
        </p>

        <div style={{ textAlign: "center" }}>
          <Group position="center">
            <Button style={{ borderRadius: 5 }}
              position="center"
              size="md"
              color="gray"
              onClick={() => resetForm()}>
              Reset
            </Button>

            <Button style={{ backgroundColor: "#001641", color: "#ffffff", borderRadius: 5 }}
              position="center"
              size="md"
              loading={loading}
              onClick={() => submitForm()}>
              Submit
            </Button>

          </Group>
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
