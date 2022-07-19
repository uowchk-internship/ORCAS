import { useState } from 'react';
import { SegmentedControl, Button, Modal } from '@mantine/core';

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
            <td style={{ width: "60%" }}>Topic</td>
            <td style={{ width: "20%" }}>Detail</td>
            <td style={{ width: "20%" }}>Action</td>
          </tr>
        </thead>

        <tbody>

          <ApprovalItem setShowDetailView={setShowDetailView}/>
          <ApprovalItem setShowDetailView={setShowDetailView}/>


        </tbody>
      </table>


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