import { useState, useEffect } from 'react';
import { SegmentedControl, Chips, Chip, Image, Button, Modal, Group, Accordion, createStyles } from '@mantine/core';

import { getAllMaterials } from '../../functions/materials'
import MaterialDetailEdit from './materialDetailEdit'
import ManagementItem from './managementItem'
import PageNumber from '../page'

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

  const [showDetailView, setShowDetailView] = useState(false)
  const [detailViewItem, setDetailViewItem] = useState({})
  const [needRefresh, setNeedRefresh] = useState(false)

  const [keyword, setKeyword] = useState("")
  const [oldKeyword, setOldKeyword] = useState("")

  //filters
  const [chosenTab, setChosenTab] = useState(["Journal Article", "Newspaper Article", "Video"])
  const [subjectFilter, setSubjectFilter] = useState(["Science & Technology", "Arts & Humanities", "Social Science", "Business", "Others"])
  const [status, setStatus] = useState("all")
  const [sortNew, setSortNew] = useState(false)

  //for monitoring changes in filter
  const [oldChosenTab, setOldChosenTab] = useState(["Journal Article", "Newspaper Article", "Video"])
  const [oldSubjectFilter, setOldSubjectFilter] = useState(["Science & Technology", "Arts & Humanities", "Social Science", "Business", "Others"])
  const [oldStatus, setOldStatus] = useState("all")
  const [oldSortNew, setOldSortNew] = useState(false)


  const [fetched, setFetched] = useState(false)
  const [materials, setMaterials] = useState([])
  const [filteredMaterials, setFilteredMaterials] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)

  const checkFilterChanged = () => {
    let result = true;

    if (chosenTab !== oldChosenTab) {
      setOldChosenTab(chosenTab)
    } else if (subjectFilter !== oldSubjectFilter) {
      setOldSubjectFilter(subjectFilter)
    } else if (sortNew !== oldSortNew) {
      setOldSortNew(sortNew)
    } else if (oldStatus !== status) {
      setOldStatus(status)
    } else {
      result = false
    }

    return result
  }

  const checkFilterMatch = (item) => {
    let result = false;

    //checking type
    for (const tab of chosenTab)
      if (item.type.includes(tab))
        result = true;

    if (result) {
      result = false;

      //checking subject
      for (const subject of subjectFilter)
        if (item.subject.includes(subject))
          result = true;
    }

    if (result && (status === "all" || item.status === status)) {
      result = true
    } else {
      result = false
    }

    return result;
  }

  const filterAndSort = (materials_, keyword_) => {
    //filter and sort the array
    let filtered = []
    for (const item of materials_) {
      if ((keyword_ === "" || item.topic.toLowerCase().includes(keyword_.toLocaleLowerCase())) && checkFilterMatch(item)) {
        filtered.push(item)
      }
    }

    if (sortNew) {
      filtered.sort((a, b) => b.publishYear - a.publishYear)
    } else {
      filtered.sort((a, b) => a.publishYear - b.publishYear)
    }

    setFilteredMaterials(filtered)
    setCurrentPage(1)
    setTotalPage(Math.ceil(filtered.length / 10))
  }

  const fetchMaterials = async (keyword_) => {
    let result = await getAllMaterials()
    setMaterials(result)
    filterAndSort(result, keyword_)
    setFetched(true)
  }

  useEffect(() => {

    if (!fetched) {
      fetchMaterials("")
    }

    if (needRefresh) {
      console.log("Refreshing")
      fetchMaterials(keyword)
      setNeedRefresh(false)
    }

    console.log("checkFilterChanged(): " + checkFilterChanged())
    if (checkFilterChanged()) {
      filterAndSort(materials, keyword)
    }

  })


  return (
    <>

      {/* Search area */}
      <section id="search-bar" >
        <div id="search-container">
          <input value={keyword} onChange={(e) => {
            setKeyword(e.target.value);
            fetchMaterials(e.target.value);
          }}
            type="text" placeholder="Please input the keywords" name="search" />
          <a onClick={() => setFetched(false)}>
            <Image src="/images/search.png" height={39} width={39} />
          </a>
        </div>
      </section>

      {/* Search filters */}
      <Accordion multiple initialItem={-1}>
        <Accordion.Item label="Search Filters" >

          <b>Subjects:</b>
          <div>
            <Chips value={subjectFilter} onChange={setSubjectFilter} multiple size="md" radius="sm" classNames={classes} >
              <Chip value="Science & Technology">Science & Technology</Chip>
              <Chip value="Arts & Humanities">Arts & Humanities</Chip>
              <Chip value="Social Science">Social Science</Chip>
              <Chip value="Business">Business</Chip>
              <Chip value="Others">Others</Chip>
            </Chips>
          </div>

          <b>Type:</b>
          <div >
            <Chips value={chosenTab} onChange={setChosenTab} multiple size="md" radius="sm" classNames={classes}>
              <Chip value="Journal Article">Journal Articles</Chip>
              <Chip value="Newspaper Article">Newspaper Articles</Chip>
              <Chip value="Video">Video</Chip>
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
        </Accordion.Item>
      </Accordion>




      <div className="uw-search--sort cell large-12">
        <div>
          <p className="results">
            Results &nbsp;
            <b>
              {(currentPage - 1) * 10 + 1} -&nbsp;
              {(filteredMaterials.length < currentPage * 10) ?
                filteredMaterials.length : currentPage * 10}
            </b>
            &nbsp;of <b>{filteredMaterials.length}</b> for "<b>{keyword}</b>"
          </p>
        </div>
        <div className="uw-search--sort-by">
          <ul>
            <li><a className={`button-hr ` + (sortNew ? 'selected' : "")} onClick={() => { setSortNew(!sortNew) }}>New to old</a></li>
            <li><a className={`button-hr ` + (!sortNew ? 'selected' : "")} onClick={() => { setSortNew(!sortNew) }}>Old to new</a></li>
          </ul>
        </div>
      </div>




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
          {(filteredMaterials.length > 0) ?
            [...filteredMaterials].map((item, i) => {
              if ((i <= (currentPage * 10 - 1)) && (i >= ((currentPage - 1) * 10)))
                return <ManagementItem data={item} key={i}
                  setShowDetailView={setShowDetailView}
                  setDetailViewItem={setDetailViewItem}
                  setNeedRefresh={setNeedRefresh} />

              // <SearchItem data={item} key={i} />
            }) :
            <>
              <tr>
                <td colSpan="4" >No result</td>
              </tr>
            </>
          }

        </tbody>
      </table>

      <div >
        <nav aria-label="pagination">
          <ul className="pagination uw-pagination" style={{ textAlign: "center", width: "100%" }}>
            <Group>
              <PageNumber
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPage={totalPage}
              />
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

        <MaterialDetailEdit detailViewItem={detailViewItem} />
      </Modal>

    </>
  );
}