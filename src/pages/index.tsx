import React, { useCallback, useEffect, useState } from 'react'
 
import { Container, TableContainer } from '../styles/pages/Home'
import Table from '../components/Table'
import Modal from '../components/Modal'
import { useFetch } from '../hooks/useFetch';
import api from '../services/api';
import { GreenButton, GreyButton } from '../styles/components/Button';
import { Spread } from '../common/types'

const Home: React.FC = () => {
  const { data, mutate } = useFetch<Spread[]>('body')
  const [loading, setLoading] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedId, setSelectedId] = useState(undefined)
  const [openModalMode, setOpenModalMode] = useState(undefined)
  const workingHoursSpread = data?.filter(spread => spread.spreadTypeId == 1 )
  const nightShiftSpread = data?.filter(spread => spread.spreadTypeId == 2)
  const handleRefreshSpreadValues = useCallback(async() => {
    setLoading(true)
    const response = await api.get('body')
    mutate(response.data, false)
    setLoading(false)
  }, [data, mutate])

  useEffect(() => {
    if(!modalOpen) {
      handleRefreshSpreadValues()
    }
  }, [modalOpen])

  if(!data || loading) { return (
    <Container>carregando...</Container>
  ) }

  if(modalOpen) { return (
    <Modal setOpenModal={setModalOpen} modalModeOpen={openModalMode} selectedId={selectedId} setSelectedId={setSelectedId} />
  ) }
  
  return (
    <Container>
      <h1>Spread Configuration</h1>
      <div>
        <GreyButton onClick={handleRefreshSpreadValues}>REFRESH SPREAD VALUES</GreyButton>
        <GreenButton onClick={() => {
            setModalOpen(true)
            setOpenModalMode('insertMode')
          }
        }
        >
            ADD RANGE
        </GreenButton>
      </div>
      <TableContainer>
        <Table data={workingHoursSpread} titleHead={`Working Hours`} setOpenModal={setModalOpen} setModalModeOpen={setOpenModalMode} setSelectedId={setSelectedId} />
      </TableContainer>
      <TableContainer>
        <Table data={nightShiftSpread} titleHead={`Night Shift`} setOpenModal={setModalOpen} setModalModeOpen={setOpenModalMode} setSelectedId={setSelectedId}/>
      </TableContainer>
    </Container>
  );
}

export default Home