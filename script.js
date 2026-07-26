console.log("SchemeSense AI Loaded Successfully!");

let button = document.getElementById("startBtn");
let input = document.getElementById("schemeInput");
let result = document.getElementById("result");

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        button.click();
    }
});

button.addEventListener("click", function () {

    let userInput = input.value.trim().toLowerCase();

    if (userInput === "") {
        result.innerHTML = `
        <h2>⚠️ Empty Input</h2>
        <p>Please enter a category.</p>
        `;
        return;
    }

    result.innerHTML = "🔍 Searching best government schemes...";

    setTimeout(function () {

        if (userInput === "student") {

            result.innerHTML = `
            <h2>🎓 Student Schemes</h2>
            <p><b>Recommended:</b></p>
            <ul>
            <li>National Scholarship Portal (NSP)</li>
            <li>PM YASASVI Scholarship</li>
            <li>State Scholarship Schemes</li>
            </ul>
            <button onclick="applyScheme()">Apply Now</button>
            `;

        }

        else if (userInput === "farmer") {

            result.innerHTML = `
            <h2>🌾 Farmer Schemes</h2>
            <ul>
            <li>PM-KISAN</li>
            <li>PM Fasal Bima Yojana</li>
            <li>Soil Health Card Scheme</li>
            </ul>
            <button onclick="applyScheme()">Apply Now</button>
            `;

        }

        else if (userInput === "women") {

            result.innerHTML = `
            <h2>👩 Women Welfare Schemes</h2>
            <ul>
            <li>Beti Bachao Beti Padhao</li>
            <li>Mahila Samman Savings Certificate</li>
            <li>Free Skill Development Programs</li>
            </ul>
            <button onclick="applyScheme()">Apply Now</button>
            `;

        }

        else if (userInput === "startup") {

            result.innerHTML = `
            <h2>🚀 Startup India</h2>
            <ul>
            <li>Startup India Scheme</li>
            <li>Stand-Up India</li>
            </ul>
            <button onclick="applyScheme()">Apply Now</button>
            `;

        }

        else if (userInput === "business") {

            result.innerHTML = `
            <h2>🏢 Business Schemes</h2>
            <ul>
            <li>MSME Support Scheme</li>
            <li>Mudra Loan</li>
            </ul>
            <button onclick="applyScheme()">Apply Now</button>
            `;

        }

        else if (userInput === "unemployed") {

            result.innerHTML = `
            <h2>💼 Employment Schemes</h2>
            <ul>
            <li>PM Kaushal Vikas Yojana</li>
            <li>Skill India Mission</li>
            </ul>
            <button onclick="applyScheme()">Apply Now</button>
            `;

        }

        else if (userInput === "disabled") {

            result.innerHTML = `
            <h2>♿ Disability Schemes</h2>
            <ul>
            <li>ADIP Scheme</li>
            <li>Unique Disability ID (UDID)</li>
            </ul>
            <button onclick="applyScheme()">Apply Now</button>
            `;

        }

        else if (userInput === "senior") {

            result.innerHTML = `
            <h2>👴 Senior Citizen Schemes</h2>
            <ul>
            <li>National Pension Scheme</li>
            <li>Senior Citizen Savings Scheme</li>
            </ul>
            <button onclick="applyScheme()">Apply Now</button>
            `;

        }

        else {

            result.innerHTML = `
            <h2>❌ No Scheme Found</h2>
            <p>Try: Student, Farmer, Women, Startup, Business, Unemployed, Disabled or Senior.</p>
            `;

        }

        input.value = "";

    }, 1500);

});

function applyScheme() {
    window.open("https://www.myscheme.gov.in", "_blank");
}