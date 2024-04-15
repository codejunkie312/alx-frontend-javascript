export const weakMap = new WeakMap();
export const queryAPI = (endpoint) => {
  if (!(endpoint instanceof Object) || !endpoint.protocol || !endpoint.name) {
    throw new Error('Endpoint must be an object of { protocol: \'http\', name: \'getUsers\' }');
  }
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1 || 1);
};
