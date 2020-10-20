/* question Show */
const icon = document.getElementById("icon");

const showMenu = (label, content) => {
    const toggle = document.getElementById(label),
    answer = document.getElementById(content);
    let questionContent = document.querySelectorAll(".question__content");

    if(toggle && answer){
        toggle.addEventListener("click", () => {
            if(answer.classList.contains("show")){
                answer.classList.remove("show");
                icon.classList.replace("bx-x", "bx-plus")
            } else {
                questionContent.forEach(c => c.classList.remove("show"));
                icon1.classList.replace("bx-x", "bx-plus")
                icon2.classList.replace("bx-x", "bx-plus")
                icon3.classList.replace("bx-x", "bx-plus")
                icon4.classList.replace("bx-x", "bx-plus")

                answer.classList.add("show");
                icon.classList.replace("bx-plus", "bx-x")
            }
            
        });
    };
};

showMenu("label", "content");

/* question2 Show */
const icon1 = document.getElementById("icon-1");

const showMenu1 = (label1, content1) => {
    const toggle1 = document.getElementById(label1),
    answer1 = document.getElementById(content1);
    let questionContent = document.querySelectorAll(".question__content");

    if(toggle1 && answer1){
        toggle1.addEventListener("click", () => {
            if(answer1.classList.contains("show")){
                answer1.classList.remove("show");
                icon1.classList.replace("bx-x", "bx-plus")
            } else {
                questionContent.forEach(c => c.classList.remove("show"));
                icon.classList.replace("bx-x", "bx-plus")
                icon2.classList.replace("bx-x", "bx-plus")
                icon3.classList.replace("bx-x", "bx-plus")
                icon4.classList.replace("bx-x", "bx-plus")

                answer1.classList.add("show");
                icon1.classList.replace("bx-plus", "bx-x")
            }
           
        });
    };
};

showMenu1("label-1", "content-1");

/* question3 Show */
const icon2 = document.getElementById("icon-2");

const showMenu2 = (label2, content2) => {
    const toggle2 = document.getElementById(label2),
    answer2 = document.getElementById(content2);
    let questionContent = document.querySelectorAll(".question__content");

    if(toggle2 && answer2){
        toggle2.addEventListener("click", () => {
            if(answer2.classList.contains("show")){
                answer2.classList.remove("show");
                icon2.classList.replace("bx-x", "bx-plus")
            } else {
                questionContent.forEach(c => c.classList.remove("show"));
                icon.classList.replace("bx-x", "bx-plus")
                icon1.classList.replace("bx-x", "bx-plus")
                icon3.classList.replace("bx-x", "bx-plus")
                icon4.classList.replace("bx-x", "bx-plus")

                answer2.classList.add("show");
                icon2.classList.replace("bx-plus", "bx-x")
            }

        });
    };
};

showMenu2("label-2", "content-2");

/* question4 Show */
const icon3 = document.getElementById("icon-3");

const showMenu3 = (label3, content3) => {
    const toggle3 = document.getElementById(label3),
    answer3 = document.getElementById(content3);
    let questionContent = document.querySelectorAll(".question__content");

    if(toggle3 && answer3){
        toggle3.addEventListener("click", () => {
            if(answer3.classList.contains("show")){
                answer3.classList.remove("show");
                icon3.classList.replace("bx-x", "bx-plus")
            } else {
                questionContent.forEach(c => c.classList.remove("show"));
                icon.classList.replace("bx-x", "bx-plus")
                icon1.classList.replace("bx-x", "bx-plus")
                icon2.classList.replace("bx-x", "bx-plus")
                icon4.classList.replace("bx-x", "bx-plus")

                answer3.classList.add("show");
                icon3.classList.replace("bx-plus", "bx-x")
            }

        });
    };
};

showMenu3("label-3", "content-3");

/* question5 Show */
const icon4 = document.getElementById("icon-4");

const showMenu4 = (label4, content4) => {
    const toggle4 = document.getElementById(label4),
    answer4 = document.getElementById(content4);
    let questionContent = document.querySelectorAll(".question__content");

    if(toggle4 && answer4){
        toggle4.addEventListener("click", () => {
            if(answer4.classList.contains("show")){
                answer4.classList.remove("show");
                icon4.classList.replace("bx-x", "bx-plus")
            } else {
                questionContent.forEach(c => c.classList.remove("show"));
                icon.classList.replace("bx-x", "bx-plus")
                icon1.classList.replace("bx-x", "bx-plus")
                icon2.classList.replace("bx-x", "bx-plus")
                icon3.classList.replace("bx-x", "bx-plus")

                answer4.classList.add("show");
                icon4.classList.replace("bx-plus", "bx-x")
            }

        });
    };
};

showMenu4("label-4", "content-4");