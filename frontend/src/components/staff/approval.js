import { useState, useEffect } from 'react'
import { SegmentedControl, Button, Modal, Group } from '@mantine/core';

import { getAllMaterials } from '../../functions/materials'
import MaterialDetailEdit from './materialDetailEdit'
import ApprovalItem from './approvalItem'
import PageNumber from '../page'


export default function Censorship() {
  const [filter, setFilter] = useState("pending")
  const [oldFilter, setOldFilter] = useState("pending")
  const [showDetailView, setShowDetailView] = useState(false)
  const [detailViewItem, setDetailViewItem] = useState({})

  const [fetched, setFetched] = useState(false)
  const [materials, setMaterials] = useState([])
  const [filteredMaterials, setFilteredMaterials] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)

  const filterMaterials = (materials_) => {
    let tempFiltered = []
    for (const item of materials_) {
      if (filter === "all" || item.status === filter) {
        tempFiltered.push(item)
      }
    }
    setFilteredMaterials(tempFiltered)
    setCurrentPage(1)
    setTotalPage(Math.ceil(tempFiltered.length / 10))
  }



  useEffect(() => {
    const fetchMaterials = async () => {
      let result = await getAllMaterials()
      setMaterials(result)
      setFetched(true)
      filterMaterials(result)

    }

    if (!fetched || materials.length === 0) {
      fetchMaterials(materials)
    }

    if (oldFilter != filter) {
      filterMaterials(materials)
      setOldFilter(filter)
    }

  })

  return (
    <>
      <div style={{ textAlign: "center", paddingLeft: 200, paddingRight: 200 }}>

        <SegmentedControl fullWidth color="dark" size="md"
          value={filter}
          onChange={setFilter}
          data={[
            { label: 'All', value: 'all' },
            { label: 'Pending', value: 'pending' },
            { label: 'Approved', value: 'approve' },
            { label: 'Rejected', value: 'reject' },
          ]} />

      </div>
      <br />

      <table style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <td style={{ width: "50%" }}>Topic</td>
            <td style={{ width: "20%" }}>Detail</td>
            <td style={{ width: "10%" }}>Status</td>
            <td style={{ width: "20%" }}>Action</td>
          </tr>
        </thead>

        <tbody>

          {(filteredMaterials.length > 0) ?
            [...filteredMaterials].map((item, i) => {
              if ((i <= (currentPage * 10 - 1)) && (i >= ((currentPage - 1) * 10)))
                return <ApprovalItem data={item} key={i}
                  setShowDetailView={setShowDetailView}
                  setDetailViewItem={setDetailViewItem} />

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