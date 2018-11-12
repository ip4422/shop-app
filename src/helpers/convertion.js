export const getBool = (value) => {
  if (typeof (value) === "string") {
    return JSON.parse(value.toLowerCase().trim())
  } else {
    return value
  }
}
