import React from 'react'
import '@/styles/global.css'
import style from '@/styles/app.module.css'

function App(): JSX.Element {
  return (
    <React.StrictMode>
      <div className={style.app}>
        <h1 className={style.text}>Hello world!</h1>
      </div>
    </React.StrictMode>
  )
}

export default App
