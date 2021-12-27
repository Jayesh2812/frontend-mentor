window.addEventListener("load", () => {
    let bill_input = document.querySelector("#bill");
    let tip_inputs = document.querySelectorAll(".tip-input");
    let custom_tip_input = document.querySelector("#tip-custom");
    let people_input = document.querySelector("#people");
    let tip_amount_div = document.querySelector(".tip-amount-value");
    let total_div = document.querySelector(".total-value");
    let reset_btn = document.querySelector('button[type="reset"]');
    let bill = 0;
    let tip_percent = 0;
    let people = 1;
    reset_btn.disabled = true;

    const setSize = (size) => {
        document.documentElement.style.setProperty("--h2-size", size);
    };

    const getSize = () => {
        return getComputedStyle(document.documentElement,null).getPropertyValue('--h2-size');
    };

    const get_total_per_person = () => {
        return (bill + (bill * parseInt(tip_percent)) / 100) / people;
    };

    const get_tip_per_person = () => {
        return (bill * parseInt(tip_percent)) / 100 / people;
    };

    const set_amount = () => {
        let total = `$${get_total_per_person().toFixed(2)}`
        let size = 0.5 * (1 - (total.length - 5 ) / 6) + 1.5
        console.log(size+'em')
        setSize(size+'em')
        tip_amount_div.innerHTML =  `$${get_tip_per_person().toFixed(2)}`;
        total_div.innerHTML = total;
    };
    bill_input.addEventListener("input", (e) => {
        reset_btn.disabled = false;
        bill = bill_input.value ? parseFloat(bill_input.value) : 0;
        if (bill === 0) {
            bill_input.previousElementSibling.classList.add("active");
            return;
        }
        bill_input.previousElementSibling.classList.remove("active");
        set_amount();
    });

    people_input.addEventListener("input", (e) => {
        people = people_input.value ? parseInt(people_input.value) : 0;
        if (people === 0) {
            people_input.previousElementSibling.classList.add("active");
            return;
        }
        people_input.previousElementSibling.classList.remove("active");
        set_amount();
    });

    for (let tip_input of tip_inputs) {
        tip_input.addEventListener("input", (e) => {
            tip_percent = tip_input.value ? parseFloat(tip_input.value) : 0;
            set_amount();
        });
    }
    custom_tip_input.addEventListener("click", (e) => {
        tip_percent = custom_tip_input.value
            ? parseFloat(custom_tip_input.value)
            : 0;
        set_amount();
    });
    custom_tip_input.addEventListener("focus", (e) => {
        let checked_input = document.querySelector(".tip-input:checked");
        if (checked_input) checked_input.checked = false;
    });

    reset_btn.addEventListener("click", (e) => {
        tip_percent = 0;
        bill = 0;
        people = 1;
        set_amount();
    });
});
