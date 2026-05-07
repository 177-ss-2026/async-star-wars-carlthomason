//Try It 1: etch a Planet with await
/* async function getPlanet(id) {
  const resp = await fetch(`https://swapi.info/api/planets/${id}`);
  const data = await resp.json();
  console.info(data);
}

getPlanet(1); */

//Try It 2: Check resp.ok
/* async function getPlanet(id) {
  const resp = await fetch(`https://swapi.info/api/planets/${id}`);

  if (!resp.ok) {
    console.error(`Request failed: ${resp.status}`);
    return;
  }

  const data = await resp.json();
  console.info(data);
}

getPlanet(999); // Bad ID — watch the console */

//Try It 3: Hook Up a Form
/* const select = document.querySelector("#sw-select");

select.addEventListener("change", async (event) => {
  const category = event.target.value;
  if (!category) return; // guard clause — user picked the placeholder

  const resp = await fetch(`https://swapi.info/api/${category}/`);

  if (!resp.ok) {
    console.error(`Failed: ${resp.status}`);
    return;
  }

  const data = await resp.json();
  console.info(data);
}); */

//Try It 4: Show a Loading State
const select = document.querySelector("#sw-select");
const output = document.querySelector("#output");

select.addEventListener("change", async (event) => {
  const category = event.target.value;
  if (!category) return;

  // Loading state
  output.textContent = `Loading ${category}...`;

  const resp = await fetch(`https://swapi.info/api/${category}/`);

  if (!resp.ok) {
    output.textContent = `Something went wrong. Status: ${resp.status}`;
    return;
  }

  const data = await resp.json();
  console.info(data);
  output.textContent = `Loaded ${data.length} results.`;
});
