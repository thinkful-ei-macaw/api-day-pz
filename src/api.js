const BASE_URL = "https://thinkful-list-api.herokuapp.com/zacbarreca";

const getItems = () => {
  return fetch(`${BASE_URL}/items`);
};

const createItem = name => {
  const newItem = JSON.stringify({
    name: name
  });
  return fetch(`${BASE_URL}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: newItem
  });
};

const updateItem = (id, updateData) => {
  return fetch(`${BASE_URL}/items/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateData)
  });
};

const deleteItem = id => {
  return fetch(`${BASE_URL}/items/${id}`,
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
