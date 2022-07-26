import { useState, useEffect } from 'react'
import Datetime from 'react-datetime';
import { Chips, Chip, createStyles, Button, Modal, Group } from '@mantine/core';

import UploadResultFail from '../student/uploadResultFail';
import UploadResultSuccess from '../student/uploadResultSuccess';
import BatchUploadPreview from './uploadBatchPreview'

import { csvHandler } from '../../functions/admin'
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
  const [showRemark, setShowRemark] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [previewData, setPreviewData] = useState([])

  const [submitLoading, setSubmitLoading] = useState(false);
  const [batchUploadLoading, setBatchUploadLoading] = useState(false);
  const [success, setSuccess] = useState(true);
  const [submittable, setSubmittable] = useState(false);
  const [csvError, setCSVError] = useState(false);

  //Form values
  const [topic, setTopic] = useState("")
  const [author, setAuthor] = useState("")
  const [publishYear, setPublishYear] = useState(new Date())
  const [publisher, setPublisher] = useState("")
  const [subjects, setSubjects] = useState([])
  const [types, setTypes] = useState("")
  const [url, setUrl] = useState("")
  const [abstract, setAbstract] = useState("")

  const submitForm = async () => {
    setSubmitLoading(true)

    let data = {
      id: 0,
      email: "admin",
      topic: topic,
      author: author,
      publishYear: (publishYear.format('YYYY') !== undefined) ? publishYear.format('YYYY') : publishYear.getFullYear,
      publisher: publisher,
      subject: subjects.toString(),
      type: types.toString(),
      url: url,
      views: 0,
      status: "approve",
      materialAbstract: abstract
    }

    let result = await saveMaterial(data)
    if (result === "done") {
      setSuccess(true)
    } else {
      setSuccess(false)
    }
    setShowPopup(true)
    setSubmitLoading(false)

  }

  const resetForm = () => {
    setTopic("")
    setAuthor("")
    setPublisher("")
    setPublishYear(new Date())
    setSubjects([])
    setTypes("")
    setUrl("")
    setAbstract("")
  }

  const batchUploadHandler = async (e) => {
    setBatchUploadLoading(true)

    //start reading the file
    const file = e.target.files[0];
    let result = await csvHandler(file)

    if (result.length === 0) {
      setCSVError(true)
    } else {
      setShowPreview(true)
      setPreviewData(result)
    }

    document.getElementById('programPlanUpload').type = "text"
    document.getElementById('programPlanUpload').type = "file"
    setBatchUploadLoading(false)
  }

  useEffect(() => {
    //Check if all required fields are entered by user.
    if (topic !== "" &&
      subjects.length !== 0 &&
      types !== "" &&
      url !== "" &&
      abstract !== "") {
      setSubmittable(true)
    }else{
      setSubmittable(false)
    }

  })

  



  return (
    <>

      <div>
        <label htmlFor="programPlanUpload">
          <Button style={{ backgroundColor: "#001641", color: "#ffffff", borderRadius: 5 }}
            onClick={() => document.getElementById('programPlanUpload').click()}
            position="center" size="md"
            loading={batchUploadLoading}>
            Batch Upload With CSV File
          </Button>
        </label>
        <input hidden type="file" id="programPlanUpload" accept=".csv" onChange={batchUploadHandler} />

        <p style={{ color: "#ED0A00" }} hidden={!csvError}>
          Error when reading the CSV file.
        </p>
      </div>
      <br />



      <Group>
        <a href="/CSV_Sample.csv" download>
          <Button style={{ backgroundColor: "#0033FF", color: "#ffffff", borderRadius: 5 }}
            position="center"
            size="md">
            Download CSV Template
          </Button>
        </a>

        <Button style={{ backgroundColor: "#0033FF", color: "#ffffff", borderRadius: 5 }}
          position="center"
          onClick={() => setShowRemark(true)}
          size="md">
          Remarks for uploading CSV file
        </Button>



      </Group>

      <form>
        <br />
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

        <div style={{ width: "50%" }}>
          <Datetime
            initialViewMode="years"
            dateFormat="YYYY" timeFormat={false}
            value={publishYear}
            input={false}
            onChange={(e) => setPublishYear(e)}
          />
        </div><br />

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
          Please double check link is valid before submission.<br /><br />
          The value of "email" will be "admin", and excluded from the ranking.<br />
          The material will be approved automatically.<br />
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

            <Button style={{ backgroundColor: (submittable) ? "#001641" : "", color: "#ffffff", borderRadius: 5 }}
              position="center"
              size="md"
              loading={submitLoading}
              disabled={!submittable}
              onClick={() => submitForm()}>
              Submit
            </Button>

          </Group>
        </div>
        <br /><br />
      </form>


      {/* Modals */}
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

      <Modal
        withCloseButton={false}
        size="80%"
        opened={showRemark}
        onClose={() => setShowRemark(false)}
      >
        <img src="/images/csvSample.png" /> <br /><br />
        <h2 style={{ fontSize: 30 }}>Available values for subjects:</h2>
        <ul>
          <li>Science & Technology</li>
          <li>Arts & Humanities</li>
          <li>Social Science</li>
          <li>Business</li>
          <li>Others</li>
        </ul>

        <p>
          For multiple subjects, please seperate the values with a <b>comma(,)</b> <br />
          Eg: <b>"Science & Technology, Arts & Humanities, Social Science"</b>
        </p>

        <h2 style={{ fontSize: 30 }}>Available values for resources type:</h2>
        <ul>
          <li>Journal Article</li>
          <li>Newspaper Article</li>
          <li>Video</li>
        </ul>
      </Modal>

      <Modal
        withCloseButton={false}
        size="xl"
        opened={showPreview}
        onClose={() => setShowPreview(false)}
      >
        <BatchUploadPreview
          data={previewData}
          setShowPreview={setShowPreview}
          setSuccess={setSuccess}
          setShowPopup={setShowPopup}
        />
      </Modal>

    </>
  );
}