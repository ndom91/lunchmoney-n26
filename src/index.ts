// import { N26 } from "n26-api";

async function handleRequest(request: Request): Promise<Response> {
  // console.log(N26_USER, LUNCHMONEY_TOKEN);
  const start = new Date("September 1, 2020");
  const end = new Date("October 10, 2020");

  const apiUrl: string = "https://api.tech26.de";
  const clientId: string = "android";
  const clientSecret: string = "secret";

  const data: object = {
    grant_type: "password",
    username: N26_USER,
    password: N26_PASS,
  };

  const cred: string = btoa(`${clientId}:${clientSecret}`);
  const headers = {
    Authorization: `Basic ${cred}`,
    "Content-type": "application/x-www-form-urlencoded",
    "device-token": "646ed8aa-0bf7-11eb-adc1-0242ac120002",
    // "User-Agent":
    //   "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.86 Safari/537.36",
  };

  return fetch(`${apiUrl}/oauth2/token`, {
    method: "post",
    headers,
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log("data", data);
      return new Response(`request method: ${request.method} ${data}`);
    })
    .catch((err) => console.error(err));

  // axios.post(`${N26.apiUrl}/oauth/token`, stringify(data), { headers });
  // this.currentToken = {
  //   accessToken: response.data.access_token,
  //   refreshToken: response.data.refresh_token,
  // };

  // const api: N26 = new N26(N26_USER, N26_PASS);
  // api
  //   .authenticate()
  //   .then(() => api.getTransactions(start, end, "10000"))
  //   .then((transactions) => console.log("test", transactions))
  //   .catch((error) => `testt ${console.log(error)}`);
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
