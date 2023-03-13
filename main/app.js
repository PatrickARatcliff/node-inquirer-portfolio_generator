const inquirer = require('inquirer');
const fs = require('fs');


const generatePortfolio = ({ userName, userLocation, userHobby, userFood, userPets, linkedInUrl, gitHubUrl }) => `<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Portfolio Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
</head>
<body>
    <header>
        <div class="container-fluid">
            <div class="row">
                <div class="col text-center">
                    <h1>
                        ${userName}<small class="text-muted">'s Portfolio</small>
                    </h1>
                </div>
            </div>
        </div>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col">
                    <div class="card shadow-lg p-3 mb-5" >
                        <ul class="list-group list-group-flush border">
                            <li class="list-group-item bg-light">Location: ${userLocation}</li>
                            <li class="list-group-item bg-light">Bio:
                                <div class="card">
                                    <ul class="list-group list-group-flush">
                                      <li class="list-group-item">Hobby: ${userHobby}</li>
                                      <li class="list-group-item">Favorite Food: ${userFood}</li>
                                      <li class="list-group-item">Pets: ${userPets}</li>
                                    </ul>
                                  </div>
                            </li>
                            <li class="list-group-item bg-primary">LinkedIn: <a style="color: whitesmoke" href="${linkedInUrl}" target="_blank">${linkedInUrl}</a></li>
                            <li class="list-group-item bg-secondary">GitHub: <a style="color: whitesmoke" href="https://github.com/${gitHubUrl}" target="_blank">${gitHubUrl}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossorigin="anonymous"></script>
</body>
</html>`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'userName',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'userLocation',
            message: 'Where are you from?',
        },
        {
            type: 'input',
            name: 'userHobby',
            message: 'What is your favorite hobby?',
        },
        {
            type: 'input',
            name: 'userFood',
            message: 'What is your favorite food?',
        },
        {
            type: 'input',
            name: 'gitHubUrl',
            message: 'Enter your GitHub Username',
        },
        {
            type: 'input',
            name: 'linkedInUrl',
            message: 'Enter your LinkedIn URL.',
        },
    ])
    .then((answers) => {
        const htmlPageContent = generatePortfolio(answers);

        fs.writeFile('index.html', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('Portfolio page successfully created!'))
    });