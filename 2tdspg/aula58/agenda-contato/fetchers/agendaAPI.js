import axios from 'axios';

const api = axios.create({
  baseURL: "https://fiap-2023-2tdspg-16bb6-default-rtdb.firebaseio.com/"
});

const carregarAPI = () => { 
    return api.get("/agenda.json");
}

const apagarAPI = ( obj ) => { 
    return api.delete("/agenda/" + obj.id + ".json")
}

const salvarAPI = ( obj ) => {
    return api.post("/agenda.json", obj);
}

export { carregarAPI, apagarAPI, salvarAPI }