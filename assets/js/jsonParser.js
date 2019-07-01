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


            var modalList = "<div class=\"row\">\n" +
                "              <div class=\"col-lg-10 col-md-10 \">\n" +
                "                <div class=\"row\">\n" +
                "                  <h3 class=\"col-6\"> + f.projectName + </h3>\n" +
                "                  <h4 class=\"col-6 date-align-right\">Duration: " + f.projectDuration + " </h4>\n" +
                "                </div>\n" +
                "                <p><b>Technology Stack:</b>" + f.technologyUsed + "</p>\n" +
                "              </div>\n" +
                "              <div class=\"col-lg-2 col-md-2 \">\n" +
                "                <ul class=\"nav nav-pills nav-pills-icons\" role=\"tablist\">\n" +
                "                  <li class=\"nav-item\">\n" +
                "                    <button class=\"nav-link btn-info text-white open-modal-btn\" data-toggle=\"modal\" data-target=\"#myModal" + count +"\">\n" +
                "                      <i class=\"fas fa-info\"></i> View Details\n" +
                "                    </button>\n" +
                "                  </li>\n" +
                "                </ul>\n" +
                "              <div>\n" +
                "\n" +
                "                </div>\n" +
                "              </div>\n" +
                "            </div>";


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
                "                <a href='" + f.onlineLink +"' \"button\" class=\"btn btn-link\">Github Link</a>\n" +
                "                <button type=\"button\" class=\"btn btn-danger btn-link\" data-dismiss=\"modal\">Close</button>\n" +
                "              </div>\n" +
                "            </div>\n" +
                "          </div>\n" +
                "        </div>";
            $("#dynamicModal").append(modal);
            $("#modalList").append(modalList);
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