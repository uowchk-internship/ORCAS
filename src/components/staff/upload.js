import { useState } from 'react'
import Datetime from 'react-datetime';
import { Chips, Chip, createStyles, Button, Modal } from '@mantine/core';

import UploadResultFail from '../student/uploadResultFail';
import UploadResultSuccess from '../student/uploadResultSuccess';

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

  //Form values
  const [subjects, setSubjects] = useState([])
  const [type, setType] = useState([])



  return (
    <>
      <form>
        <label htmlFor="se">Student Email: <span style={{ color: "#ED0A00" }}>*</span></label>
        <input type="text" id="se" name="ses" />

        <label htmlFor="topic">Topic: <span style={{ color: "#ED0A00" }}>*</span></label>
        <input type="text" id="topic" name="topic" />

        <label htmlFor="author">Author:</label>
        <input type="text" id="author" name="author" />

        <label htmlFor="datepicker">Publish year: <span style={{ color: "#ED0A00" }}>*</span></label>
        <Datetime
          initialViewMode="years"
          dateFormat="YYYY" timeFormat={false}
        />

        <label htmlFor="publisher">Publisher:</label>
        <input type="text" id="publisher" name="publisher" />

        <label >Subject: (you can choose more than one) <span style={{ color: "#ED0A00" }}>*</span></label>

        <Chips value={subjects} onChange={setSubjects} multiple size="md" radius="sm" classNames={classes}>
          <Chip value="scienceTechnology">Science & Technology</Chip>
          <Chip value="artsHumanities">Arts & Humanities</Chip>
          <Chip value="socialScience">Social Science</Chip>
          <Chip value="business">Business</Chip>
          <Chip value="others">Others</Chip>
        </Chips>
        <br />

        <label >Resources Type: (you can choose more than one) <span style={{ color: "#ED0A00" }}>*</span></label>
        <Chips value={type} onChange={setType} multiple size="md" radius="sm" classNames={classes}>
          <Chip value="journal">Journal Article</Chip>
          <Chip value="newspaper">Newspaper Article</Chip>
          <Chip value="video">Video</Chip>
        </Chips>
        <br />

        <label htmlFor="link">Link: <span style={{ color: "#ED0A00" }}>*</span></label>
        <input type="text" id="link" name="link" />

        <p style={{ color: "#ED0A00" }}>
          Reminder: <br />
          Please input one link per upload only. <br />
          Please double check link is valid before submission.
        </p>

        <div style={{ textAlign: "center" }}>
          <Button style={{ backgroundColor: "#001641", color: "#ffffff", borderRadius: 5 }}
            position="center"
            size="md"
            onClick={() => setShowPopup(true)}>
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
        <UploadResultSuccess />
        <br /><br />
        <UploadResultFail />
      </Modal>
    </>
  );
}
