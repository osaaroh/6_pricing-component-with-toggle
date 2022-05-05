const cb = document.querySelector('#cb');

function showHide() {
    const price_month = document.querySelectorAll('.pricing--card-cost_month');
    const price_year = document.querySelectorAll('.pricing--card-cost_annual');
    if (document.querySelector('#cb:checked') != null) {
        for (let index = 0; index < price_month.length; index++) {
            price_month[index].style.display = "block";
            price_year[index].style.display = "none";
        }

    } else {
        for (let index = 0; index < price_year.length; index++) {
            price_month[index].style.display = "none";
            price_year[index].style.display = "block";
        }

    }
}


cb.addEventListener('click', showHide)