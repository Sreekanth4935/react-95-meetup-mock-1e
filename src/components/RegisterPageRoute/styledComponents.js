import Styled from 'styled-components'

export const MainContainer = Styled.div`
font-family:'Roboto';
`
export const NavImage = Styled.img`
margin:10px;
`
export const RegisterContainer = Styled.div`
min-height:80vh;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`

export const RegisterImage = Styled.img`
height:400px;
`

export const Heading = Styled.h1`
font-family:'Roboto';
`

export const InputLabel = Styled.label`
font-family:'Roboto';
display:flex;
flex-direction:column;
`

export const NameInput = Styled.input`
padding:8px;
margin-top:5px;
margin-bottom:30px;
outline:none;
border-radius:3px;
border:solid 1px #7b8794;

`
export const InputSelect = Styled.select`
padding:10px;
margin-top:5px;
outline:none;
border-radius:3px;
border:solid 1px #7b8794;

`

export const FormSubmitButton = Styled.button`
color:#ffff;
background-color:#2563eb;
border:0;
padding:10px;
margin-top:30px;
border-radius:5px;
`

export const ErrorMsg = Styled.p`
color:red;
margin-top:2px;
font-size:13px;
`
