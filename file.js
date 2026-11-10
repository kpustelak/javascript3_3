let loginForm = document.getElementById("countryForm");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    let answer = document.getElementById("results");
    const url = "https://api.giphy.com/v1/gifs/random?api_key=q5owuCwkXmI97Yh9Vl36RxPbGrCRAjGw&rating=g";


    try{
        const response = (await fetch(url)).json();

        console.log(await response);
        const data = await response;
        answer.innerHTML = "<img src='" + data.data.images.original.url + "'>";

    } catch (error) {
        alert(error);
    }
});