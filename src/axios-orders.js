import axios from 'axios'

const instance=axios.create({
    baseURL:'https://burger-builder-db-131c5.firebaseio.com/'
})

export default instance