import axios from 'axios';
const SWEET_BARS_URL = 'http://localhost:8080/sweet-bars/';

export default class PostService {
    static async getAll() {
        const response = await axios.get(SWEET_BARS_URL);
        return response;
    }
    static async getById(id) {
        const response = await axios.get(SWEET_BARS_URL + id);
        return response;
    }
    static async putInStockById(id, data) {
        const response = await axios.put(SWEET_BARS_URL + id, data);
        return response;
    }
}
