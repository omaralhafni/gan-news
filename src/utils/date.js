export const handleDateTime = (time) => {
    return `${time.slice(0, 10)} | ${time.slice(12, 19)}`
}

export const currentDate = new Date().toJSON().slice(0, 10);