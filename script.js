
const description = document.getElementsByClassName('description');

document.getElementsByClass('ptitle').addEventListener('mouseover', showdes);
// ptitle.addEventListener('click', showdes)
function showdes() {
    console.log('hi');
    description.style.display = "block";
}