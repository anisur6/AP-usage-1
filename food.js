const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value = ' ';

    //get the api
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        // console.log(url)
        .then(res => res.json())
        .then(data => displayFood(data.meals));
}

const displayFood = meals => {
    const foodDiv = document.getElementById('search-result');
    foodDiv.innerText = " ";
    for (const meal of meals) {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = ` 
        <div class="card h-100 shadow">
                <img src="${meal.strMealThumb}"
                    class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <!-- below there is slice method used for displaying limited string in UI --!>
                    <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
                    <button onclick='getDetail(${meal.idMeal})' class="btn btn-success">See More..</button>
                </div>
            </div>
        `
        foodDiv.appendChild(div)
    }
}

const getDetail = mealid => {
    
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.meals[0]))
}

const displayDetails = detail => {
    console.log(detail);
    const foodDetail = document.getElementById('details-field');
    foodDetail.innerText = " ";
    const div = document.createElement('div')
    div.classList.add('card');
    div.style.color = 'white';
    div.innerHTML = `
    <img  src="${detail.strMealThumb}" class="card-img" alt="...">
                <div class="card-img-overlay">
                  <h2 class="card-title">${detail.strMeal}</h2>
                  <p class="card-text">${detail.strInstructions.slice(0, 500)}</p>
                  <p class="card-text">Last updated 3 mins ago</p>
                </div>
    `;
    foodDetail.appendChild(div);
}






































