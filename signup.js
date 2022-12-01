const form = document.querySelector(`form`);
const logInBtn = document.querySelector(`#login`);

logInBtn.addEventListener(`click`, () => {
    window.location = `login.html`;
})

form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    const email = document.querySelector(`#email`).value;
    const password = document.querySelector(`#password`).value;
    const confirmPword = document.querySelector(`#confirmPword`).value;
    const nickname = document.querySelector(`#nickname`).value;

    if (password === confirmPword) {
        fetch(`https://testapi.io/api/tomisss1/resource/UserDatabase
        `, {
            method: `GET`,
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((result) => {
                let users = result.data;
                console.log(users);
                let include = false;
                users.forEach((user) => {
                    console.log(user.email)
                    if (user.email.includes(`${email}`) || user.nickname.includes(`${nickname}`)) {
                        include = true;
                    };
                })
                return include
            })
            .then((include) => {
                console.log(`include`, include);
                if (include === true) {
                    setTimeout(() => {
                        console.log(`timeout`);
                        let confrimAccount = confirm(`User, already exists, would you like to log in?`);
                        if (confrimAccount === true) {
                            window.location = `login.html`;
                        }
                    }, 1000);

                };

                if (include === false) {
                    fetch(`https://testapi.io/api/tomisss1/resource/UserDatabase
                    `, {
                        method: `POST`,
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: email,
                            password: password,
                            nickname: nickname,
                            favorites: JSON.stringify([])
                        })
                    })
                        .then((response) => {
                            if (response.ok) {
                                return response.json();
                            }
                        })
                        .catch((err) => {
                            console.warn(err);
                        });
                }
                return include
            })
            .then((include) => {
                if (include === false) {
                    let loginPage = "login.html"
                    window.location = loginPage;
                }

            })
            .catch((err) => {
                console.warn(err);
            });
    }
    else {
        setTimeout(() => {
            console.log(`timeout`);
            alert(`Password and Confirm doesn't match..`)
        }, 2000)
    }
})




