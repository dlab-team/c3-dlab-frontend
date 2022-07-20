import React from 'react'

export default function Modal() {
  return (
    <div>            
      <Modal
    trigger={<Button>Show Modal</Button>}
    header='Recuerda!'
    content='Debes completar el formulario de registro para estar Job .'
    actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
  /></div>
  )
}
