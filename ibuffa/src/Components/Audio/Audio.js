import React, { useRef, useState } from 'react'
import { Button, Container } from '@material-ui/core'
import { play, pause } from './helpers'
import { ReactComponent as PlayButton } from './play-svgrepo-com.svg'
import { ReactComponent as PauseButton } from './pause-svgrepo-com.svg'

const Audio = ({ src }) => {
    const [state, setState] = useState(false)

    const audioPlayerRef = useRef(null)

    const onClickEvent = () => {
        if (!state) {
            play(audioPlayerRef)
        } else {
            pause(audioPlayerRef)
        }
        setState(!state)

        console.log(audioPlayerRef)
    }
    return (
        <div>
            <audio
                ref={audioPlayerRef}
                style={{ marginRight: 10, outline: 'none' }}
                src={src}
            />
            {!state ? (
                <PlayButton onClick={onClickEvent} />
            ) : (
                <PauseButton onClick={onClickEvent} />
            )}
        </div>
    )
}

export default Audio
