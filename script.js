function showGuide(type) {

    let guides = {
        

        burns: "1. Cool the burn under cool running water for 20 minutes. 2. Remove jewellery near the burn if possible. 3. Cover loosely with a clean dressing. 4. Seek medical help for serious burns.",

        choking: "If an adult cannot breathe, speak or cough, call for emergency help. Give up to 5 back blows, followed by up to 5 abdominal thrusts. Repeat until help arrives. If unconscious, begin CPR if trained.",

        fractures: "1. Keep the injured person still. 2. Support the injured area. 3. Do not attempt to straighten the bone. 4. Seek urgent medical attention."
    };

    document.getElementById("guide").innerHTML =
        "<div class='card'><h3>First Aid Instructions</h3><p>" +
        guides[type] +
        "</p><button onclick=\"document.getElementById('guide').innerHTML=''\">Close</button></div>";
}
