// axios import
import axios from "axios";

//  instatance of axios with custom configuration
 export  const instance = axios.create({
  baseURL: "https://dummyjson.com/",
  timeout: 5000,
  // headers: {'X-Custom-Header': 'foobar'}
});
