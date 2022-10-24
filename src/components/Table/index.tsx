import React from "react";
import { StyledTable } from '../../styles/components/Table'
import { MdModeEdit, MdDelete } from 'react-icons/md';

export default ({ data, titleHead, setOpenModal, setModalModeOpen, setSelectedId }) => (
  <TableMarkup titles={Object.keys(data[0])} data={data} titleHead={titleHead} setOpenModal={setOpenModal} setModalModeOpen={setModalModeOpen} setSelectedId={setSelectedId} />
);
const TableMarkup = ({ titles, data, titleHead, setOpenModal, setModalModeOpen, setSelectedId }) => {
  const toggleModal = (id, mode) => {
    setOpenModal(true)
    setModalModeOpen(mode)
    setSelectedId(id)
  }
  return (
    <>
      <h2>{titleHead}</h2>
      <StyledTable>
        <colgroup>
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            {titles.map((title, index) => (
              <th key={index}>{title}</th>
            ))}
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={`tr${item.id}`}>
              {titles.map((title, index) => (
                  <td 
                    key={`td${item.id}${index}`}
                    className={`
                      ${title == 'side' && item.side=='SELL' ? 'sell' : ''}
                      ${title == 'side' && item.side=='BUY' ? 'buy' : ''}
                      ${title == 'notionalFrom' ? 'block-grey' : ''}
                      ${title == 'notionalTo' ? 'block-grey' : ''}
                      ${title == 'spreadPercentil' ? 'block-grey' : ''}
                    `}
                  >
                    {item[title]}
                  </td>
              ))}
              <td key={`edit${item.id}`} className='actionIcon edit' onClick={() => toggleModal(item.id, 'insertMode')}>
                <MdModeEdit />
              </td>
              <td key={`delete${item.id}`} className='actionIcon delete' onClick={() => toggleModal(item.id, 'deleteMode')}>
                <MdDelete />
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </>
  )
}
