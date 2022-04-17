export const formatTime = (seconds: number) => {
    // let time = new Date(seconds * 1000);
    // return time.toLocaleTimeString('pt-br', {
    //     minute: '2-digit',
    //     second: '2-digit',
    // })

    let minutes = Math.floor(seconds / 60);
    seconds -= (minutes * 60);
    let secString = `${seconds < 10 ? '0'+seconds : seconds}`;
    let minString = `${minutes < 10 ? '0'+minutes : minutes}`;
    return `${minString}:${secString}`
}
