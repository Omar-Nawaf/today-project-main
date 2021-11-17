fetch('https://newsapi.org/v2/everything?q=Apple&from=2021-11-17&sortBy=popularity&apiKey=01f534f251394377a73711cf081caa0c')
    .then(response => response.json())
    .then(myJson => console.log(myJson))


