// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function() {
    $(".btn-edit-role").click(function () {
        const nameRole = $(this).parent().parent().find("td:eq(2)").text();
        const idRole = $(this).parent().parent().find("td:eq(0)").text();
        console.log(nameRole);
        $("#input-edit-role").attr("placeholder", nameRole);
        $("#input-edit-role-id").val(idRole);
        $("#form-edit-role").css("display", "block");
        $("#form-create-role").css("display", "none");
    });

    $("#btn-cancle-edit-role").click(function() {
        $("#form-create-role").css("display", "block");
        $("#form-edit-role").css("display", "none");
    });

    $(".btn-delete-role").click(function () {
        const currentBtn = $(this);
        const nameRole = currentBtn.parent().parent().find("td:eq(2)").text();
        const idRole = currentBtn.parent().parent().find("td:eq(0)").text();
        console.log(nameRole + " - " + idRole);
        if (confirm("Do you delete?")) {
            $.ajax({
                url: "/Roles/Delete?Id="+idRole+"&Name="+nameRole,
                method: "DELETE",
                success: function (data) {
                    console.log("Success Delete");
                    currentBtn.parent().parent().remove();
                }
            });
        }
    });
});