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
