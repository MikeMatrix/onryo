import React, {useEffect, useState} from 'react'
import './App.css'
import EnmityList from './component/EnmityList/EnmityList'
import NavigationHeader from './component/NavigationHeader/NavigationHeader'

const App = () => {
    const [target, setTarget] = useState({})
    const [entries, setEntries] = useState([])
    const [isLocked, setLocked] = useState(false)

    useEffect(
        () => {
            const updateData = (enmity) => {
                setTarget(enmity?.Target ?? {})
                setEntries(enmity?.Entries ?? [])
            }

            const updateOverlayState = (event) => {
                setLocked(event?.detail?.isLocked ?? false)
            }

            window.addEventListener('EnmityTargetData', updateData)
            window.addEventListener('onOverlayStateUpdate', updateOverlayState)
            window.startOverlayEvents()

            return () => {
                window.removeOverlayListener('EnmityTargetData', updateData)
                window.removeOverlayListener('onOverlayStateUpdate', updateOverlayState)
            }
        },
        [],
    )

    return (
        <div className={'app ' + (isLocked ? 'hide-resize' : '')}>
            <NavigationHeader target={target}/>
            <EnmityList entries={entries}/>
        </div>
    )
}

export default App
