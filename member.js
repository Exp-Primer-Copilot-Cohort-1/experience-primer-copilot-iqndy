function skillsMember() {
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;
    var memberText = member.options[member.selectedIndex].text;
    var memberSkills = document.getElementById("memberSkills");
    var memberSkillsValue = memberSkills.options[memberSkills.selectedIndex].value;
    var memberSkillsText = memberSkills.options[memberSkills.selectedIndex].text;
    var memberSkillsArray = memberSkillsText.split(", ");
    var memberSkillsArrayLength = memberSkillsArray.length;
    var memberSkillsArrayOutput = "";
    var i;
    for (i = 0; i < memberSkillsArrayLength; i++) {
        memberSkillsArrayOutput += "<li>" + memberSkillsArray[i] + "</li>";
    }
    document.getElementById("memberOutput").innerHTML = "<h3>" + memberText + "</h3><ul>" + memberSkillsArrayOutput + "</ul>";
}
