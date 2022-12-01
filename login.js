const form = document.querySelector(`form`);
const signUpBtn = document.querySelector(`#signUp`);
const userPreferences = JSON.parse(sessionStorage.getItem(`userPreference`)) || [];

signUpBtn.addEventListener(`click`, () => {
    window.location = `signup.html`;
})

form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    const email = document.querySelector(`#email`);
    const password = document.querySelector(`#password`);

    console.log(email.value, password.value);

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
            let includes = false;
            console.log(users);

            users.forEach((user) => {
                let favorites = JSON.parse(user.favorites);
                console.log(user);
                console.log(favorites);
                if (user.email.includes(email.value) && user.password.includes(password.value)) {
                    includes = true;
                    userPreferences.push(user);
                    sessionStorage.setItem(`userPreference`, JSON.stringify(userPreferences));
                }
                console.log(user);
            })
            return includes
        })
        .then((includes) => {
            if (includes === true) {
                window.location = `mainpage.html`;
            }
            if (includes === false) {
                setTimeout(() => {
                    console.log(`timeout`);
                    alert(`Email or password is incorrect`);
                    email.style.backgroundColor = `#F08080`;
                    password.style.backgroundColor = `#F08080`;
                    email.style.color = `white`;
                    password.style.color = `white`;
                }, 1000)
            }
        })
        .catch((err) => {
            console.warn(err);
        });

})




