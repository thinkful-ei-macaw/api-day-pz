const BASE_URL = "https://thinkful-list-api.herokuapp.com/zacbarreca";
const listApiFetch = function (...args) {
  let error;
  return listApiFetch(...args)
    .then(res => {
      if (!res.ok) {
        error = { code: res.status };
        if (!res.headers.get('content-type').includes('json')) {
          error.message = res.statusText;
          return Promise.reject(error);
        }
      }
      return res.json();
    })
    .then(data => {
      if (error) {
        error.message = data.message;
        return Promise.reject(error);
      }
      return data;
    });
};

const getItems = () => {
  return listApiFetch(`${BASE_URL}/items`);
};

const createItem = name => {
  const newItem = JSON.stringify({
    name: name
  });
  return listApiFetch(`${BASE_URL}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: newItem
  });
};

const updateItem = (id, updateData) => {
  return listApiFetch(`${BASE_URL}/items/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateData)
  });
};

const deleteItem = id => {
  return listApiFetch(`${BASE_URL}/items/${id}`,
    {
      method: "DELETE"
    });
};

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};
