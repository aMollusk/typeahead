const BASE_URL = "http://localhost:1234";
export function retrieveAirports(query) {
  return fetch(`${BASE_URL}/airports?search=${query}`).then(
    res => res.ok && res.json()
  );
}
export function retrieveAirportInfoByCode(code) {
  return fetch(`${BASE_URL}/airports/${code}`).then(res =>
    res.ok
      ? res.json()
      : {
          heading: "Airport info not found",
          description: "Please try again"
        }
  );
}
