function languageInfo(language) {

  let info;

  switch (language) {
    case 'mandarin':
      info = 'MOST number of native speakers!';
      break;
    case 'Spanish':
      info = '2nd place in a number of native speakers';
      break;
    case 'English':
      info = '3rd place';
      break;
    case 'Hindi':
      info = 'Number 4';
      break;
    case 'Arabic':
      info = '5th most spoken language';
      break;
    default:
      info = 'Not in the top 5';
      break;
  }

  return info;
}

console.log(languageInfo('Spanish'));