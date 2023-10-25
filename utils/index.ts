export async function getProductList() {
  const apiKey = "67b22440c1msh8d123b9c0105660p1f4a16jsnde71acdb928f";

  const response = await fetch(
    "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/categories/list",
    {
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
      },
    }
  );
  const data = await response.json();
  return data;
}
