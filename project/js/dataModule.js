// Exporting an asynchronous function named fetchData
// that fetches data from a JSON file located at './data/data.json'.
// If the response is not ok, the function throws an error.
// Otherwise, the function returns the parsed JSON data.
// If an error occurs, the function logs the error to the console
// and returns an empty array.
export async function fetchData() {
  try {
    const response = await fetch('./data/data.json');
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
}