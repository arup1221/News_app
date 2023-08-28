import React from 'react'
import Header from './Header/header'
import AreaM from './Middlearea/areaM'
import AreaB from './Footerarea/areaB'

function home() {
    return (
        <div className="w-screen">
            <Header />
            <AreaM />
            <AreaB />
        </div>
    )
}

export default home