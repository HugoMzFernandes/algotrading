import styled from 'styled-components'
export const StyledModal = styled.div`
.modalBackground {
  width: 100vw;
  height: 100vh;
  background-color: #272727;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;


.modalContainer {
  width: 90vw;
  height: 90vh;
  border-radius: 12px;
  background-color: #484e53;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
}

.modalContainer .title {
  display: inline-block;
  text-align: center;
  margin-top: 10px;
}

.titleCloseBtn {
  display: flex;
  justify-content: flex-end;
}

.titleCloseBtn button {
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
}

.modalContainer .body {
  flex: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  text-align: center;
}

.modalContainer .footer {
  flex: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#cancelBtn {
  background-color: crimson;
}
`
