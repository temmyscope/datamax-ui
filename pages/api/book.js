const sendRequest = async(params) => {
    const { endpoint, method, requestData } = params;
    const url = `https://datamax-api.herokuapp.com/api/${endpoint.trim()}`;
    const options = {
      method: method.toUpperCase(),
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json',
        "timeout": 5000
      },
      body: JSON.stringify(requestData)
    };
    return fetch(url, options)
    .then(res => res.json())
    .then(json => json)
    .catch(err => console.error('error:' + err));
}

Api = {
  
  post: async(endpoint, requestData) => await sendRequest({ endpoint, method: 'POST', requestData}),

  get: async(endpoint) => await sendRequest({ endpoint, method: 'GET'}),

  delete: async(endpoint, requestData) => await sendRequest({ endpoint, method: 'DELETE', requestData}),

  put: async(endpoint, requestData) => await sendRequest({ endpoint, method: 'PUT', requestData}),

  patch: async(endpoint, requestData) => await sendRequest({ endpoint, method: 'PATCH', requestData}),
}
export default function books(req, res) {

}
