
        const projects_tab = document.querySelector("#projects-tab")
        projects_tab.href = projects_tab.href.replace("?type=beta","");
         projects_tab.id = projects_tab.id.replace("?type=beta","");
    	function countString(str, letter) {
    let count = 0;

    // looping through the items
    for (let i = 0; i < str.length; i++) {

        // check if the character is at that position
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}
