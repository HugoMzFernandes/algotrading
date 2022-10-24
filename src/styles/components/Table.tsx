import styled from "styled-components";

export const StyledTable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  margin-bottom: 2em;
  overflow-y: scroll;
  min-width: 96.5vw;

  caption-side: bottom;

  td,
  th {
    border: none;
    padding: 10px;
  }

  td {
    padding: 5px 10px;
    text-align: center;
    vertical-align: middle;
  }

  .sell {
    color: red;
  }

  .buy {
    color: green;
  }

  .block-grey {
    background: #484e53;
    background-clip: content-box;
    text-align: right;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #272727;
    }
    :hover {
      opacity: 0.5;
    }

  }
  thead > tr {
    background-color: black;
  }

  .actionIcon {
    cursor: pointer;
  }

  .edit {
    color: white;
  }

  .delete {
    color: red;
  }
`;