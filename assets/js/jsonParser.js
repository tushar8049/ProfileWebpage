$(document).ready( function() {
    var project = [];

    $.getJSON('./project.json', function(data) {
        console.log(data);
        console.log(data.project);
        console.log(data["project"]);
        var count = 1;
        $.each(data.project, function(i, f) {
            console.log(f.projectName);
            console.log(i.projectName);
            // var tblRow = "<tr>" + "<td>" + f.firstName + "</td>" +
            //     "<td>" + f.lastName + "</td>" + "<td>" + f.job + "</td>" + "<td>" + f.roll + "</td>" + "</tr>"
            // $(tblRow).appendTo("#userdata tbody");
            var modal = "\n" +
                "        <div class=\"modal fade\" id=\"myModal" + count +"\" tabindex=\"-1\" role=\"dialog\">\n" +
                "          <div class=\"modal-dialog\" role=\"document\">\n" +
                "            <div class=\"modal-content\">\n" +
                "              <div class=\"modal-header\">\n" +
                "                <h5 class=\"modal-title\">" + f.projectName + "</h5>\n" +
                "                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n" +
                "                  <i class=\"material-icons\">clear</i>\n" +
                "                </button>\n" +
                "              </div>\n" +
                "              <div class=\"modal-body\">\n" +
                "                <p> " + f.technologyUsed + "\n" +
                "                </p>\n" +
                "              </div>\n" +
                "              <div class=\"modal-footer\">\n" +
                "                <a href='" + f.link +"' \"button\" class=\"btn btn-link\">Github Link</a>\n" +
                "                <button type=\"button\" class=\"btn btn-danger btn-link\" data-dismiss=\"modal\">Close</button>\n" +
                "              </div>\n" +
                "            </div>\n" +
                "          </div>\n" +
                "        </div>"
            $("#dynamicModal").append(modal);
            count = count + 1;
        });
    });
});








function loadProjects(){
    var project = [];

    $.getJSON('./project.json', function(data) {
        console.log(data)
        $.each(data.project, function(i, f) {
            console.log(f.firstName);
            // var tblRow = "<tr>" + "<td>" + f.firstName + "</td>" +
            //     "<td>" + f.lastName + "</td>" + "<td>" + f.job + "</td>" + "<td>" + f.roll + "</td>" + "</tr>"
            // $(tblRow).appendTo("#userdata tbody");
        });

    });

}