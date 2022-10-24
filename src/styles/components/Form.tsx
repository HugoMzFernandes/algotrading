import React from 'react';
import styled from 'styled-components'

export const FormGroup = styled.div`
	color: white;
  display: block;
	width: 300px;
	margin: 10px auto;
`

export const Label = styled.label`

  font-size: 12px;
	margin-bottom: 0.5em;
	color: white;
  display: block;
  text-align: left;
`


export const Input = styled.input`
	padding: 0.5em;
	color: white;
	background: #272727;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`

export const Select = styled.select`
  padding: 0.5em;
	color: white;
	background: #272727;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;

  option {
    color: white;
	  background: #272727;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`