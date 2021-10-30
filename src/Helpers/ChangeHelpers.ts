export const enforceNumber = (callback: (event: React.ChangeEvent<HTMLInputElement>) => void) => (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value = event.target.value.replace(/[^0-9]/g, '')
    return callback(event);
}

export const enforceLength = (maxLength: number, callback: (event: React.ChangeEvent<HTMLInputElement>) => void) => (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value = event.target.value.substr(0, maxLength);
    return callback(event);
}