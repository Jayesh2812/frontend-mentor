const getData = (frequency) => {
    fetch("data.json")
        .then((res) => res.json())
        .then((data) => {
            data = data.map((item) => ({
                title: item.title,
                activity_data: item.timeframes[frequency],
            }));
            setActivities(data);
        });
};
const setActivities = (data) => {
    activities.innerHTML = "";
    let images = [
        './images/icon-work.svg',
        './images/icon-play.svg',
        './images/icon-study.svg',
        './images/icon-exercise.svg',
        './images/icon-social.svg',
        './images/icon-self-care.svg',
    ]
    data.forEach(({ title, activity_data: { current, previous } }, index) => {
        let previous_period_name = frequency === "daily" ? "Yesterday" : 
                                    frequency === "weekly" ? "Last Week" : "Last Month"
        activities.innerHTML += `
        <div class="activity-wrapper">

            <img src=${images[index]} alt="" class="activity-wrapper-img" />
            
            <div class="activity">
                <p class="activity-name">${title}
                    <img src="./images/icon-ellipsis.svg" alt="ellipsis" class="activity-more-options" />
                </p>
                <h1 class="activity-current">${current}hrs</h1>
                <p class="activity-previous">${previous_period_name} - ${previous}hrs</p>
            </div>
        </div>
        `;
    });
};
let active_btn = document.querySelector(".active");
let frequency = active_btn.getAttribute("aria-data");
let activities = document.querySelector(".activities");
let btns = document.querySelectorAll(".profile-frequency");
getData(frequency);

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let new_frequency = e.target.getAttribute("aria-data");
        if (frequency !== new_frequency) {
            document.querySelector(".active").classList.remove("active");
            e.target.classList.add("active");

            frequency = new_frequency;
            getData(frequency);
        }
    });
});
