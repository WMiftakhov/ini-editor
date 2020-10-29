export const convertDate = () => {
    let optionsDate = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }
    return new Date().toLocaleString('ru-RU', optionsDate)
  }
  