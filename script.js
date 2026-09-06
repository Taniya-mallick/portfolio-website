// Smooth scrolling for navigation links

document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', function (event) {

        event.preventDefault();

        const section = document.querySelector(
            this.getAttribute('href')
        );

        if (section) {

            section.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});


// Console message

console.log("Welcome to Taniya Mallick's Portfolio!");