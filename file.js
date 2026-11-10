let loginForm = document.getElementById("countryForm");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    let GIFToFind = document.getElementById("q");
    let answer = document.getElementById("results");

    if (GIFToFind.value.trim() == "") {
        alert("Wpisz coś w pole!");
        return;
    }

    try {
        const params = new URLSearchParams({
            api_key: "-",
            q: GIFToFind.value.trim(),
            limit: 10,
            rating: "g"
        });
        const url = "https://api.giphy.com/v1/gifs/search?" + params;

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Błąd serwera: " + response.status);
        }

        const body = await response.json();
        const data = body.data;

        if (data.length == 0) {
            answer.innerHTML = "Nic nie znaleziono.";
            return;
        }

        let photos = '';
        data.forEach(photo => {
            photos += `<img src="${photo.images.fixed_height.url}" alt="${photo.title}" />`;
        });

        answer.innerHTML = photos;

    } catch (error) {
        alert(error);
    }
});