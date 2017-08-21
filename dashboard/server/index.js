import axios from 'axios'
var ajax = axios.create({
  timeout: 30000
})

export default ajax
