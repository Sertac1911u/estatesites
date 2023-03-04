function filterItems() {
  const searchInput = document.querySelector('#search');
  const categorySelect = document.querySelector('#category');
  const itemsList = document.querySelector('#items');
  const items = itemsList.querySelectorAll('.item');

  items.forEach(item => {
    const searchText = searchInput.value.toLowerCase();
    const category = categorySelect.value;
    const itemText = item.textContent.toLowerCase();
    const itemCategory = item.getAttribute('data-category');

    if ((searchText === '' || itemText.includes(searchText)) &&
        (category === 'all' || itemCategory === category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

const searchInput = document.querySelector('#search');
const categorySelect = document.querySelector('#category');

searchInput.addEventListener('input', filterItems);
categorySelect.addEventListener('change', filterItems);

function toggleBox() {

  var box = document.getElementById("box");

  if (box.style.display === "none")
  {
    box.style.display = "block";
  }
  else 
  {
    box.style.display = "none";
  }
  
}


function toggleCloseBox()
{
  if(box.style.display == "block")
  {
    box.style.display = "none";
  }
  else
  {
    box.style.display = "block";
  }
}

