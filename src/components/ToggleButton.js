import React, { useState } from 'react'

import DoneIcon from '@mui/icons-material/Done'
import ClearIcon from '@mui/icons-material/Clear'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'

const ToggleButtons = ({ handleChangeSymbol }) => {
  const [symb, setSymb] = useState(null)

  const x = <ClearIcon fontSize="small" color="success" />
  const line = <HorizontalRuleIcon fontSize="small" />
  const circle = <FiberManualRecordIcon fontSize="small" color="error" />
  const chulo = <DoneIcon fontSize="small" color="info" />
  const emptyCircle = (
    <RadioButtonUncheckedIcon fontSize="small" color="warning" />
  )

  const handleSymbol = (e, newSymb) => {
    setSymb(newSymb)
    if (newSymb === 'Ex') {
      handleChangeSymbol(x)
    } else if (newSymb === 'Line') {
      handleChangeSymbol(line)
    } else if (newSymb === 'Chulo') {
      handleChangeSymbol(chulo)
    } else if (newSymb === 'Circle') {
      handleChangeSymbol(circle)
    } else if (newSymb === 'EmptyCircle') {
      handleChangeSymbol(emptyCircle)
    } else if (newSymb === null) {
      handleChangeSymbol(line)
    }
  }

  return (
    <ToggleButtonGroup
      exclusive
      size="small"
      color="info"
      onChange={handleSymbol}
      value={symb}
      sx={{ backgroundColor: 'rgba(29,33,52,1)' }}
    >
      <ToggleButton value="Ex" sx={{ color: 'white' }}>
        <ClearIcon fontSize="small" />
      </ToggleButton>
      <ToggleButton value="Line" sx={{ color: 'white' }}>
        <HorizontalRuleIcon fontSize="small" />
      </ToggleButton>
      <ToggleButton value="Chulo" sx={{ color: 'white' }}>
        <DoneIcon fontSize="small" />
      </ToggleButton>
      <ToggleButton value="Circle" sx={{ color: 'white' }}>
        <FiberManualRecordIcon fontSize="small" />
      </ToggleButton>
      <ToggleButton value="EmptyCircle" sx={{ color: 'white' }}>
        <RadioButtonUncheckedIcon fontSize="small" />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default ToggleButtons
