export const CalculateTime = (time) => {
    let minutes = parseInt(~~(time / 60))
    let seconds = (time % 60);
    let hour = 0;
    if (minutes > 60) {
        hour = ~~(minutes / 60);
        minutes = (minutes % 60);
    }
    if (String(minutes).length === 1) {
        minutes = `0${minutes}`;
    }
    if (String(seconds).length === 1) {
        seconds = `0${seconds}`;
    }
    if (hour !== 0) {
        return `${hour}:${minutes}:${seconds}`;
    }
    else {
        return `${minutes}:${seconds}`;

    }
}