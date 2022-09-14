function scrollCheck() {
    const level2 = document.getElementById("level2")
    const level3 = document.getElementById("level3")
    const level4 = document.getElementById("level4")
    const level5 = document.getElementById("level5")
    const level6 = document.getElementById("level6")
    const level7 = document.getElementById("level7")

    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 120;

    if (scrolled >= 20) {
        level2.classList.replace("fa-regular", "fa-solid")
    } else {
        level2.classList.replace("fa-solid", "fa-regular")
    }

    if (scrolled >= 40) {
        level3.classList.replace("fa-regular", "fa-solid")
    } else {
        level3.classList.replace("fa-solid", "fa-regular")
    }

    if (scrolled >= 60) {
        level4.classList.replace("fa-regular", "fa-solid")
    } else {
        level4.classList.replace("fa-solid", "fa-regular")
    }

    if (scrolled >= 80) {
        level5.classList.replace("fa-regular", "fa-solid")
    } else {
        level5.classList.replace("fa-solid", "fa-regular")
    }

    if (scrolled >= 100) {
        level6.classList.replace("fa-regular", "fa-solid")
    } else {
        level6.classList.replace("fa-solid", "fa-regular")
    }

    if (scrolled >= 120) {
        level7.classList.replace("fa-regular", "fa-solid")
    } else {
        level7.classList.replace("fa-solid", "fa-regular")
    }


}

function fade() {
    const sections = [...document.querySelectorAll(".banner")];

    let options = {
        rootMargin: "0px",
        threshold: 0.75,
    };

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            const { target } = entry;

            if (entry.intersectionRatio >= 0.75) {
                target.classList.add("is-visible");
            } else {
                target.classList.remove("is-visible");
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section, index) => {

        const sectionChildren = [...section.children];

        sectionChildren.forEach((el, index) => {
            el.style.setProperty("--delay", `${index * 250}ms`);
        });

        observer.observe(section);
    });

}

function navbarHide() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}

window.onload = function () { scrollCheck(); fade() };
window.onscroll = function () {
    scrollCheck()
    fade()
    navbarHide()
};

var prevScrollpos = window.pageYOffset;
