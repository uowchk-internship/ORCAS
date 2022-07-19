import { useState } from 'react';
import { SegmentedControl, Button, Modal, Group } from '@mantine/core';

import MaterialDetailEdit from './materialDetailEdit'
import ApprovalItem from './approvalItem'

export default function Consorship() {
  const [filter, setFilter] = useState("all")
  const [showDetailView, setShowDetailView] = useState(false)

  return (
    <>
      <div style={{ textAlign: "center", paddingLeft: 200, paddingRight: 200 }}>

        <SegmentedControl fullWidth color="dark" size="md"
          value={filter}
          onChange={setFilter}
          data={[
            { label: 'All', value: 'all' },
            { label: 'Pending', value: 'pending' },
            { label: 'Approved', value: 'approved' },
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

          <ApprovalItem setShowDetailView={setShowDetailView} />
          <ApprovalItem setShowDetailView={setShowDetailView} />

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