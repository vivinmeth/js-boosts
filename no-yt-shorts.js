
setInterval(() => {
  const url = window.location.href;
  console.debug(url, url.includes("/shorts/"));
  if (url.includes('/shorts/')) {
    document.body.querySelector('video').remove();
    const segs = url.split('/');
    const id = segs.at(-1);
    console.debug(segs, id);
    if (id) {
      window.location.href = `/watch?v=${id}`;
    }
  }

}, 1 * 1000);
