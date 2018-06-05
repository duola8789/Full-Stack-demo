/**
 * Created by zh on 2018/6/5.
 */
import config from '../../config/common';
import Axios from 'axios'

export function goToUrl(url) {
  window.location.href = url;
}

export function reload() {
  window.location.reload();
}

let sHost = null;
let sPath = null;

export function getServerHostPath() {
  let sHostPath = null;
  if (!sHost) {
    sHostPath = window.location.protocol + '//' + window.location.host;
  } else {
    sHostPath = sHost;
  }
  if (sPath) {
    sHostPath += sPath;
  }
  return sHostPath;
}

export function getAppServerHostPath() {
  let sHostPath = null;
  if (!sHost) {
    sHostPath = config.appServer.protocol + config.appServer.host + ':' + config.appServer.port;
  } else {
    sHostPath = sHost;
  }
  if (sPath) {
    sHostPath += sPath;
  }
  return sHostPath;
}

// axios
Axios.defaults.baseURL = config.appServer.protocol + config.appServer.host + ':' + config.appServer.port;
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Axios.defaults.withCredentials = true;

