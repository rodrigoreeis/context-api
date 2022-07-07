import { ROOT } from "gatsby-env-variables"

const request = ({ mock, url: requestURL, ...params }) => {
  return new Promise((resolve, reject) => {
    if (mock) {
      let timeout
      timeout = setTimeout(() => {
        resolve(mock)
        clearTimeout(timeout)
      }, 800)
    } else {
      const endpoint = `${ROOT}/${requestURL}`
      fetch({ ...params, endpoint })
        .then((response) => response.json())
        .then(resolve)
        .catch(reject)
    }
  })
}

export default request
