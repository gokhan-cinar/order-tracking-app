import moment from 'moment'

const dateFormat = (format) => {
    return moment().format(format);
}

const saveItem = (value) => {
    localStorage.setItem('items', JSON.stringify(value))
}
const getItem = (value) => {
    JSON.parse(localStorage.getItem(value))
}

export default {
    dateFormat,
    saveItem,
    getItem
}