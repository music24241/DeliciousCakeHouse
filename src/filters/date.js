export default function (timestamp) {
  let date = new Date(timestamp * 1000)
  return date.toLocaleString()
}
