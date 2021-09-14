const headers = new Headers();

headers.append("Content-Type", "application/json");

const init = new Request("", {
  headers,
  mode: "cors",
  cache: "default",
  method: "POST", // *GET, POST, PUT, DELETE, etc.
  credentials: "same-origin", // include, *same-origin, omit
  redirect: "follow", // manual, *follow, error
  referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
});

// Example POST method implementation:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, init);
  return response.json(); // parses JSON response into native JavaScript objects
}

// Example POST method implementation:
async function getData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url);
  return response.json(); // parses JSON response into native JavaScript objects
}

export { postData, getData };
