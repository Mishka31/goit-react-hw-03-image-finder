export function fetchArray(params, page) {
  return fetch(
    `https://pixabay.com/api/?q=${params}&page=${page}&key=22480002-eee2092533377b2ba98494930&image_type=photo&orientation=horizontal&per_page=12`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`No Picture with name ${params}`));
  });
}
