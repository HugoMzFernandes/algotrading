import React, { useCallback, useEffect, useState } from 'react'
import api from '../../services/api';
import { useFetch } from '../../hooks/useFetch'
import { StyledModal } from '../../styles/components/Modal'
import { GreenButton, RedButton } from '../../styles/components/Button'
import { Spread } from '../../common/types'
import { FormGroup, Label, Input, Select} from '../../styles/components/Form';

export default ({ setOpenModal, modalModeOpen, selectedId, setSelectedId }) => {
  const { data, mutate } = useFetch<Spread[]>(selectedId != undefined ? `body/${selectedId}` : `body`)
  const [loading, setLoading] = useState(false)
  const [formFields, setFormFields] = useState({
    id: undefined, spreadTypeId:'', accountId: '', symbol: '', side: '', notionalFrom: '', notionalTo: '', spreadPercentil: ''
  })

  const closeModal = () => {
    setOpenModal(false)
    setSelectedId(undefined)
  }
  
  useEffect(()=> {
    const fetchData = async () => {
      setLoading(true)
      const data = await api.get(`body/${selectedId}`)
      setFormFields(data.data)
      setLoading(false)
    }
    if(selectedId != undefined) {
      fetchData()
    }
  }, [])
  
  const handleDeleteSpread = useCallback(async(selectedId: number) => {
    await api.delete(`body/${selectedId}`)
    const updatedSpreads = () => {
      if(data.id === selectedId) {
        return { }
      }
      return data
    }
    mutate(updatedSpreads, false)
    closeModal()
  }, [data, mutate])

  const handleFormChange = (event) => {
    const data = {...formFields}
    data[event.target.name] = event.target.value
    setFormFields(data)
  }

  const handleSubmitForm = () => {
    const {id, spreadTypeId, accountId, symbol, side, notionalFrom, notionalTo, spreadPercentil} = formFields
    if(selectedId != undefined) {
      api.put(`body/${selectedId}`, {
        id, spreadTypeId, accountId, symbol, side, notionalFrom, notionalTo, spreadPercentil
      })
    } else {
      api.post(`body`, {
        id, spreadTypeId, accountId, symbol, side, notionalFrom, notionalTo, spreadPercentil
      })
    }
    closeModal()
  }


  if(loading) {
    return (
      <StyledModal>
        <div>
          <div className="modalBackground">
            <div className="modalContainer">
              <div className="body">
                <p>Carregando...</p>
              </div>
            </div>
          </div>
        </div>
      </StyledModal>
    )
  }
  
  if (modalModeOpen == 'insertMode' && formFields) {
    return (
      <StyledModal>
        <div>
          <div className="modalBackground">
            <div className="modalContainer">
              <div className="titleCloseBtn">
                <button
                  onClick={() => {
                    closeModal()
                  }}
                >
                  X
                </button>
              </div>
              <div className="title">
                <h1>{selectedId != undefined ? `Edit Spread Range` : `Add Spread Range`}</h1>
              </div>
              <div className="body">
                <form onSubmit={e => e.preventDefault()}>
                <FormGroup>
                    <Label htmlFor="side">SpreadType</Label>
                    <Select
                      defaultValue={formFields.spreadTypeId}
                      onChange={e => handleFormChange(e)}
                      name="spreadTypeId"
                    >
                      <option value={undefined} hidden>
                        select
                      </option>
                      <option value="1">WORKING HOURS</option>
                      <option value="2">NIGHT SHIFT</option>
                     </Select>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="accountId">AccountId</Label>
                    <Input
                      defaultValue={formFields.accountId}
                      onChange={e => handleFormChange(e)}
                      type="number"
                      name="accountId"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="symbol">Symbol</Label>
                    <Input
                      defaultValue={formFields.symbol}
                      onChange={e => handleFormChange(e)}
                      type="text"
                      name="symbol"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="side">Side</Label>
                    <Select
                      defaultValue={formFields.side}
                      onChange={e => handleFormChange(e)}
                      name="side"
                    >
                      <option value={undefined} hidden>
                        select
                      </option>
                      <option value="BUY">BUY</option>
                      <option value="SELL">SELL</option>
                     </Select>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="notionalFrom">NotionalFrom</Label>
                    <Input
                      defaultValue={formFields.notionalFrom}
                      onChange={e => handleFormChange(e)}
                      type="number"
                      name="notionalFrom"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="notionalTo">NotionalTo</Label>
                    <Input
                      defaultValue={formFields.notionalTo}
                      onChange={e => handleFormChange(e)}
                      type="number"
                      name="notionalTo"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="spreadPercentil">Spread Percentile</Label>
                    <Input
                      defaultValue={formFields.spreadPercentil}
                      onChange={e => handleFormChange(e)}
                      type="number"
                      name="spreadPercentil"
                    />
                  </FormGroup>
                </form>
              </div>
              <div className="footer">
                <GreenButton onClick={handleSubmitForm}>{selectedId != undefined ? `EDIT SPREAD` : `ADD SPREAD`}</GreenButton>
              </div>
            </div>
          </div>
        </div>
      </StyledModal>
    )
  }
  if (modalModeOpen == 'deleteMode') {
    return (
      <StyledModal>
        <div>
          <div className="modalBackground">
            <div className="modalContainer">
              <div className="titleCloseBtn">
                <button
                  onClick={() => {
                    closeModal()
                  }}
                >
                  X
                </button>
              </div>
              <div className="title">
                <h1>Delete</h1>
              </div>
              <div className="body">
                <p>Want to delete the spread?</p>
              </div>
              <div className="footer">
                <GreenButton onClick={() => handleDeleteSpread(selectedId)}>DELETE SPREAD</GreenButton>
                <RedButton
                  onClick={() => { 
                    closeModal()
                  }}
                >
                  CANCEL
                </RedButton>
              </div>
            </div>
          </div>
        </div>
      </StyledModal>
    )
  }
}
