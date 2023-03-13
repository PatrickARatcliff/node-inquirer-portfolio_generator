const inquirer = require('inquirer');
const fs = require('fs');


const generatePortfolio = ({ userName, userLocation, userHobby, userFood, userPets, linkedInUrl, gitHubUrl }) => `<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Portfolio Generator</title>
    <link rel="icon" href="./assets/DB9942F9-D942-4F29-AB8A-B1FD0304C440_4_5005_c.jpeg">
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
                    <div class="card shadow-lg p-3 mb-5">
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
                            <li class="list-group-item" style="background-color:blue">
                                <div class="d-grid gap-2">
                                    <button onclick="window.open('${linkedInUrl}', '_blank')" variant="primary" class='mx-1 bi bi-linkedin rounded'><svg
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue"
                                            view-box="0 0 16 16">
                                            <path
                                                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                        </svg> LinkedIn</button>
                                </div>
                            </li>
                            <li class="list-group-item bg-secondary">
                                <div class="d-grid gap-2">
                                    <button onclick="window.open('https://github.com/${gitHubUrl}', '_blank')" variant="primary"
                                        class='mx-1 bi bi-github rounded'><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                            height="16" fill="black" view-box="0 0 16 16">
                                            <path
                                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg> GitHub</button>
                                </div>
                            </li>
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
            name: 'userPets',
            message: 'what is your pets name?',
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