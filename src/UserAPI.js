import axios from "axios";

class UserAPI {
  axiosInstance;

  constructor(baseURL) {
    this.axiosInstance = axios.create({ baseURL: baseURL });
  }

  async getUserList(params) {
    try {
      const response = await this.axiosInstance.get(
        `/users?page=${params.page}&per_page=${params.per_page}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
    }
    
}

export default UserAPI;