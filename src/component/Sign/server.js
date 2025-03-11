import axios from "axios";

const API = "http://localhost:3000/users";

async function getData() {
  try {
    return await axios.get(API);
  } catch (error) {
      console.log(error)
  }
}


async function postData(obj){
  try {
    await axios.post(API, obj)
  } catch (error) {
    console.log(error)
  }
}
export { getData, postData };