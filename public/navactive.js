document.addEventListener("DOMContentLoaded", function() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
        #nav-acco:hover #dropdownNavbar,
        #nav-facilities:hover #dropdownNavbar,
        #nav-services:hover #dropdownNavbar {
            display: block;
        }

        #nav-acco #dropdownNavbar,
        #nav-facilities #dropdownNavbar,
        #nav-services #dropdownNavbar {
            display: none;
        }
    `;
    document.getElementsByTagName('head')[0].appendChild(style);

    // JavaScript yang sudah ada untuk penanganan navigasi
    const navItems = {
        "about.html": "nav-about",
        "acco.html": "nav-acco",
        "facilities.html": "nav-facilities",
        "services.html": "nav-services",
        "location.html": "nav-location",
        "galery.html": "nav-gallery",
        "contact.html": "nav-contact",
        "langfrance.html": "nav-langfrance",
        "master-suite.html": "nav-master-suite",
        "guest-badroom.html": "nav-guest-badroom",
        "living-dining-pavilon.html": "nav-living-dining-pavilon",
        "media-room.html": "nav-media-room",
        "kithen.html": "nav-kitchen",
        "swimming-pool.html": "nav-swimming-pool",
        "private-gym.html": "nav-private-gym",
        "food-beverages.html": "nav-food-beverages",
        "spa-services.html": "nav-spa-services"
    };

    const currentPage = window.location.pathname.split("/").pop();
    const navItem = navItems[currentPage];

    if (navItem) {
        if (navItem === "nav-langfrance") {
            document.getElementById(navItem).style.border = "1px solid #b91c1c";
        } else {
            document.getElementById(navItem).style.color = "#b91c1c";
        }
    }
});
