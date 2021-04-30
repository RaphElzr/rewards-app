import moment from 'moment';

import { config, regexp } from 'main/constants';

const parseDateString = (dateString) => {
    return dateString ? moment(dateString).format(config.DATE_FORMAT) : '';
};

const parseHtml = (htmlString) => {
    let string = '';

    if (htmlString) {
        string = htmlString.replace(regexp.TAGS, '');
        string = string.replace(regexp.ASCII, (match, capture, charCode) => String.fromCharCode(charCode));

        return string;
    } else {
        return '';
    }
}

const daysDiff = (dateString, date = moment()) => {
    return dateString ? moment(dateString).diff(date, 'days') : 0;
};

const common = {
    parseDateString,
    parseHtml,
    daysDiff
}

export default common;