import axios, { AxiosRequestConfig } from 'axios';
import { BACKEND_KEYS, STORAGE_KEYS } from '../common/consts/app-keys.const';

class HttpSerivce {
  baseUrl: string;

  fetchingService: typeof axios;

  apiVersion: string;

  constructor(baseUrl = BACKEND_KEYS.SERVER_URL, apiVersion = 'api') {
    this.baseUrl = baseUrl;
    this.fetchingService = axios;
    this.apiVersion = apiVersion;
  }

  private getFullApiUrl(url = '') {
    return `${this.baseUrl}/${this.apiVersion}/${url}`;
  }

  private populateTokenToHeaderConfig() {
    return {
      Authorization: localStorage.getItem(STORAGE_KEYS.TOKEN)
    };
  }

  private extractUrlAndDataFromConfig(config: AxiosRequestConfig) {
    return {
      params: config.params,
      data: config.data
    };
  }

  async get(config: AxiosRequestConfig, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }

    const { data } = await this.fetchingService(this.getFullApiUrl(config.url), {
      ...config,
      ...this.extractUrlAndDataFromConfig(config)
    });

    return data;
  }

  async put(config: AxiosRequestConfig, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }

    const { data } = await this.fetchingService(this.getFullApiUrl(config.url), {
      ...config,
      ...this.extractUrlAndDataFromConfig(config)
    });

    return data;
  }

  async delete(config: AxiosRequestConfig, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }

    const { data } = await this.fetchingService(this.getFullApiUrl(config.url), {
      ...config,
      ...this.extractUrlAndDataFromConfig(config)
    });

    return data;
  }
}

export default HttpSerivce;
