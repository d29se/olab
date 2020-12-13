import React from 'react'
// Style
import style from "./ToggleSwitch.module.scss"

function ToggleSwitch({ checked, onChange }) {
  return (
    <div className={style.container}>
      <input type="checkbox" className={style.toggle} checked={checked} onChange={e => onChange(e.target.checked)} />
    </div>
  )
}

export default ToggleSwitch
