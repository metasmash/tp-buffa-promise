export const play = (dom) => {
    const { current } = dom
    current.play()
}

export const pause = (dom) => {
    const { current } = dom
    current.pause()
}
