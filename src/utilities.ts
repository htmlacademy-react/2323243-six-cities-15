import dayjs from 'dayjs';

function formatDate(value: dayjs.ConfigType, full: boolean = false): string {
  return dayjs(value).format(full ? 'MMMM YYYY' : 'YYYY-MM-DD');
}

export {formatDate};
