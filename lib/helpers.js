export function formatDate(dateString) {
  const date = new Date(dateString);
  let dd = date.getDate() + 1;
  let mm = date.getMonth() + 1;

  const yyyy = date.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  return `${mm}/${dd}/${yyyy}`;
}

export function formatTimeAgo(timeValue) {
  timeValue = (new Date() - new Date(timeValue)) / 1000;
  const years = Math.floor(timeValue / 31536000);
  const months = Math.floor(timeValue / 2592000);
  const days = Math.floor(timeValue / 86400);
  const hours = Math.floor(timeValue / 3600);
  const minutes = Math.floor(timeValue / 60);
  let ret = '';

  if (years > 0) {
    return `${years} year${years === 1 ? '' : 's'} ago`;
  }

  if (months > 0) {
    if (ret !== '') {
      ret += ' ';
    }
    return `${months} month${months === 1 ? '' : 's'} ago`;
  }

  if (days > 0) {
    if (ret !== '') {
      ret += ' ';
    }
    return `${days} day${days === 1 ? '' : 's'} ago`;
  }

  if (hours > 0) {
    if (ret !== '') {
      ret += ' ';
    }
    return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  }

  if (minutes > 0) {
    if (ret !== '') {
      ret += ' ';
    }
    return `${minutes} min${minutes === 1 ? '' : 's'} ago`;
  }

  return ret + ' ago';
}
