//Try It 1: etch a Planet with await
/* async function getPlanet(id) {
  const resp = await fetch(`https://swapi.info/api/planets/${id}`);
  const data = await resp.json();
  console.info(data);
}

getPlanet(1); */

//Try It 2: Check resp.ok
async function getPlanet(id) {
  const resp = await fetch(`https://swapi.info/api/planets/${id}`);

  if (!resp.ok) {
    console.error(`Request failed: ${resp.status}`);
    return;
  }

  const data = await resp.json();
  console.info(data);
}

getPlanet(999); // Bad ID — watch the console
