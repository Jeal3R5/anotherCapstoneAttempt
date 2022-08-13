import http from "../http-common";
class PaintingDataService {
  getAll() {
    return http.get("/");
  }

  get(id) {
    return http.get(`/${id}`);
  }

  create(data) {
    return http.post("/", data);
  }

  update(id, data) {
    return http.put(`/edit/${id}`, data);
  }

  delete(id) {
    return http.delete(`/${id}`, data);
  }

  findByTitle(title) {
    return http.get(`/?title=${title}`);
  }
}

export default new PaintingDataService();
