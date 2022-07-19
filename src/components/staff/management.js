import { useState } from 'react';
import { SegmentedControl, Chips, Chip, Image, Button, Modal, Group, Accordion, createStyles } from '@mantine/core';

import MaterialDetailEdit from './materialDetailEdit'
import ManagementItem from './managementItem'

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


export default function Management() {
  const { classes } = useStyles();

  const [status, setStatus] = useState("all")
  const [showDetailView, setShowDetailView] = useState(false)

  const [chosenTab, setChosenTab] = useState(["journals", "artsHumanities", "socialScience"])
  const [yearFilter, setYearFilter] = useState("all")
  const [subjectFilter, setSubjectFilter] = useState(["all", "scienceTechnology", "artsHumanities", "socialScience", "business", "others"])
  const [sortNew, setSortNew] = useState(false)


  return (
    <>

      {/* Search area */}
      <section id="search-bar" >
        <div id="search-container">
          <input type="text" placeholder="Please input the keywords" name="search" />
          <button type="submit" style={{ height: 39 }}>
            {/* <i className="fa fa-search"></i> */}
            <Image src="/images/search.png" height={39} width={39} />
          </button>
        </div>
      </section>
      <div class="uw-search--sort cell large-12">
        <div>
          <p class="results">Results
            <span>&nbsp;1 - 14&nbsp;</span>
            of about
            <span> 56 </span>
            for "keyword"</p>
        </div>
        <div class="uw-search--sort-by">
          <ul>
            <li><a className={`button-hr ` + (sortNew ? 'selected' : "")} onClick={() => { setSortNew(!sortNew) }}>New to old</a></li>
            <li><a className={`button-hr ` + (!sortNew ? 'selected' : "")} onClick={() => { setSortNew(!sortNew) }}>Old to new</a></li>
          </ul>
        </div>
      </div>

      {/* Search filters */}
      <Accordion multiple initialItem={0}>
        <Accordion.Item label="Search Filters" >
          <p>
            <b>Subjects:</b>
            <div>
              <Chips value={subjectFilter} onChange={setSubjectFilter} multiple size="md" radius="sm" classNames={classes} >
                <Chip value="all">All</Chip>
                <Chip value="scienceTechnology">Science & Technology</Chip>
                <Chip value="artsHumanities">Arts & Humanities</Chip>
                <Chip value="socialScience">Social Science</Chip>
                <Chip value="business">Business</Chip>
                <Chip value="others">Others</Chip>
              </Chips>
            </div>

            <b>Type:</b>
            <div >
              <Chips value={chosenTab} onChange={setChosenTab} multiple size="md" radius="sm" classNames={classes}>
                <Chip value="journals">Journals Articles (100)</Chip>
                <Chip value="newspaper">Newspapers Articles (100)</Chip>
                <Chip value="video">Video (100)</Chip>
              </Chips>
            </div>

            <b>Status:</b>
            <div >
              <Chips value={status} onChange={setStatus} size="md" radius="sm" classNames={classes}>
                <Chip value="all">All</Chip>
                <Chip value="pending">Pending</Chip>
                <Chip value="approve">Approved</Chip>
                <Chip value="reject">Rejected</Chip>
              </Chips>
            </div>

          </p>
        </Accordion.Item>
      </Accordion>



      {/* Main table */}
      <table style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <td style={{ width: "50%" }}>Topic</td>
            <td style={{ width: "20%" }}>Detail</td>
            <td style={{ width: "10%" }}>Status</td>
            <td style={{ width: "10%" }}>Action</td>
          </tr>
        </thead>

        <tbody>
          <ManagementItem setShowDetailView={setShowDetailView} />
          <ManagementItem setShowDetailView={setShowDetailView} />
        </tbody>
      </table>

      <div >
        <nav aria-label="pagination">
          <ul class="pagination uw-pagination" style={{ textAlign: "center", width: "100%" }}>
            <Group>
              <li class="pagination-previous button backward">
                <a aria-label="Previous Page">
                  <span class="icon--chevron-left"></span>
                  Previous<span class="show-for-sr">page</span>
                </a>
              </li>
              <li><a aria-label="Page 1">1</a></li>
              <li class="current"><span class="show-for-sr">You're on page</span>2</li>
              <li><a aria-label="Page 3">3</a></li>
              <li><a aria-label="Page 4">4</a></li>
              <li class="pagination-next button">
                <a aria-label="Next Page">
                  Next<span class="show-for-sr">page</span>
                  <span class="icon--chevron-right"></span>
                </a>
              </li>

            </Group>
          </ul>
        </nav>
      </div>



      <Modal
        withCloseButton={false}
        size="70%"
        opened={showDetailView}
        onClose={() => setShowDetailView(false)}
      >

        <MaterialDetailEdit />
      </Modal>

    </>
  );
}