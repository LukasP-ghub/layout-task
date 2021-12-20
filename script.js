const citesPages = [...document.querySelectorAll('[data-cites-page]')];
const citesPagesControls = [...document.querySelectorAll('[data-cites-page-control]')];
let prevActiveCitesPage = citesPagesControls[0];

const slidePage = (e) => {
  const prevActiveCitesPageValue = Number(prevActiveCitesPage.getAttribute('data-cites-page-control'));
  let newActiveCitesPageValue;
  let translateValue;
  let newActiveCitesPage;

  if (e?.target) {
    newActiveCitesPage = e.target;
    newActiveCitesPageValue = Number(newActiveCitesPage.getAttribute('data-cites-page-control'));
    clearInterval(citesInterval);
    citesInterval = setInterval(slidePage, 5000);
  } else {
    newActiveCitesPageValue = prevActiveCitesPageValue >= citesPagesControls.length - 1 ? 0 : prevActiveCitesPageValue + 1;
    newActiveCitesPage = citesPagesControls[newActiveCitesPageValue];
  }
  translateValue = newActiveCitesPageValue * 100;

  citesPages.forEach(page => {
    page.style.transform = `translateX(-${translateValue}%)`;
  })

  prevActiveCitesPage.classList.remove('cites-carousel__control--active');
  newActiveCitesPage.classList.add('cites-carousel__control--active');
  prevActiveCitesPage = newActiveCitesPage;
}

citesPagesControls.forEach(control => control.addEventListener('click', (e) => { slidePage(e) }));

let citesInterval = setInterval(slidePage, 5000);
