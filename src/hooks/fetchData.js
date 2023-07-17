export default async function apiFetch(url) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}
