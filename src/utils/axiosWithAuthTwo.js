import axios from 'axios'
export const axiosWithAuthTwo = () => {
   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyOSwidXNlcm5hbWUiOiJoZWgiLCJpYXQiOjE1ODM1MzI1NjUsImV4cCI6MTU4MzU2MTM2NX0.TxghV1DlNeocxkMhfHkA1X_JDANmDl5Q1kqf1MPIXVs"
   return axios.create({
      headers: {
         authorization: token
      },
      baseURL: 'https://reddit-sub-predictor.herokuapp.com/api/user'
   })
}