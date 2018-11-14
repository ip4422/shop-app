//validate email address. If not email return empty string
export const isValidEmail = (email) => {
  /* eslint-disable */
  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  /* eslint-enable */
  return reg.test(email)
}

export const getBool = (value) => {
  if (typeof (value) === "string") {
    return JSON.parse(value.toLowerCase().trim())
  } else {
    return value
  }
}

export const hashCode = (str) => {
  var hash = 0;
  if (str.length === 0) {
      return hash;
  }
  for (var i = 0; i < str.length; i++) {
      var char = str.charCodeAt(i);
      hash = ((hash<<5)-hash)+char;
      hash = hash & hash; // Convert to 32bit integer
  }
  return String(hash);
}
