const sendRequest = async(params) => {
    const { endpoint, method, requestData } = params;
    const url = `https://datamax-api.herokuapp.com/api/${endpoint.trim()}`;
    const options = {
      method: method.toUpperCase(),
      headers: {
        'Accept': 'application/json',
      },
      body: JSON.stringify(requestData)
    };
    return fetch(url, options)
    .then(res => res.json())
    .then(json => json)
    .catch(err => console.error('error:' + err));
}

const Api = {
  
  post: async(endpoint, requestData) => await sendRequest({ endpoint, method: 'POST', requestData}),

  get: async(endpoint) => await sendRequest({ endpoint, method: 'GET'}),

  delete: async(endpoint, requestData) => await sendRequest({ endpoint, method: 'DELETE', requestData}),

  put: async(endpoint, requestData) => await sendRequest({ endpoint, method: 'PUT', requestData}),

  patch: async(endpoint, requestData) => await sendRequest({ endpoint, method: 'PATCH', requestData}),
}

export { Api }