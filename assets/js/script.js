const resourceUrl = 'https://rickandmortyapi.com/api/character/';

axios.
get(resourceUrl).
then(({ data: { results } }) => {
  const html = results.map((item) =>
  `<li>
        <img src="${item.image}" alt="" />
        ${item.name}
      </li>`);


  $('.character-list')[0].innerHTML = html.join('');
}).
catch(err => console.log(err));

/*
const handleErrors = (response) => {
  if (!response.ok) console.error(`${response.status}: ${response.statusText}`);
  return response.json();
}

fetch(url)
  .then(handleErrors)
  .then(({ results }) => {
    const html = results.map(character =>
      `<li>
        <img src="${character.image}" alt="" />
        ${character.name}
      </li>`
    );

    $('.character-list')[0].innerHTML = html.join('');
  })
  .catch(err => console.log(err));
*/

/*
$.ajax({
  url,
  success: ({ results }) => {
    const html = results.map(character =>
      `<li>
        <img src="${character.image}" alt="" />
        ${character.name}
      </li>`
    );
    
    $('.character-list').html(html);
  },
  error: (err) => {
    console.log(err.statusText);
  }
});
*/