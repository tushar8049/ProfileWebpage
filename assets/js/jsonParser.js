function loadProjects(){
    var project = [];

    $.getJSON('assets/js/jsonParser.js', function(data) {
        console.log(data)
        $.each(data.project, function(i, f) {
            console.log(f.firstName);
            // var tblRow = "<tr>" + "<td>" + f.firstName + "</td>" +
            //     "<td>" + f.lastName + "</td>" + "<td>" + f.job + "</td>" + "<td>" + f.roll + "</td>" + "</tr>"
            // $(tblRow).appendTo("#userdata tbody");
        });

    });

}