$(document).ready(function () {
  $.validator.addMethod(
    "emailvalidation",
    function (e, t) {
      return (
        this.optional(t) ||
        /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/i.test(e)
      );
    },
    "Enter valid email",
  );
  $.validator.addMethod(
    "noSpecialChars",
    function (value, element) {
      return this.optional(element) || /^[a-zA-Z0-9]+$/.test(value);
    },
    "Enter valid Phone number.",
  );

  $.validator.addMethod(
    "invalidCountryCode",
    function (value, element) {
      // Check if the entered value is "0", "00", "000", or "0000"
      return !(
        value === "0" ||
        value === "00" ||
        value === "000" ||
        value === "0000"
      );
    },
    "Enter valid country code.",
  );

  $("#quote-form").validate({
    ignore: ":hidden:not(#country_code)",
    rules: {
      name: { required: !0, maxlength: 50 },
      email: { required: !0, emailvalidation: !0 },
      country_code: {
        required: !0,
        number: !0,
        maxlength: 4,
        minlength: 1,
        noSpecialChars: !0,
        invalidCountryCode: !0,
      },
      phone: {
        required: !0,
        number: !0,
        maxlength: 16,
        minlength: 8,
        noSpecialChars: !0,
      },
      message: { required: !0 },
    },
    messages: {
      name: { required: "Name is required." },
      email: {
        required: "Email is required.",
        emailvalidation: "Enter valid email.",
      },
      country_code: {
        required: "Please enter country code.",
        maxlength: "Enter valid country code.",
        minlength: "Enter valid country code.",
        number: "Enter valid country code.",
      },
      phone: {
        required: "Phone Number is required.",
        maxlength: "Enter valid Phone number.",
        minlength: "Enter valid Phone number.",
        number: "Enter valid Phone number.",
      },
      message: { required: "Message is required." },
    },
    submitHandler: function (e) {
      //   alert("test");
      // form.submit();
      var formData = new FormData($("#quote-form")[0]);
      $.ajax({
        type: "POST",
        url: "mail_for_getquote.php",
        data: formData,
        cache: false,
        async: false,
        contentType: false,
        processData: false,
        beforeSend: function (xhr) {
          $(".modalLoader").show();
        },
        success: function (json) {
          $("#quote-form")[0].reset();
          $("#country_code").val(""); // Reset the country_code field
          $(".successmsg").removeClass("hide");
          setTimeout(function () {
            $(".successmsg").addClass("hide");
          }, 1000);
          window.location = "https://CodeLoom Nexus.com/thank-you.php";
        },
        complete: function (data) {
          $(".modalLoader").hide();
        },
        error: function () {
          $(".errormsg").removeClass("hide");
          alert("error");
        },
      });
    },
  });

  $("#contact-form").validate({
    ignore: ":hidden:not(#country_contact)",
    rules: {
      fname_contact: { required: !0, maxlength: 50 },
      lname_contact: { required: !0, maxlength: 50 },
      email_contact: { required: !0, emailvalidation: !0 },
      country_contact: {
        required: !0,
        number: !0,
        maxlength: 4,
        minlength: 1,
        noSpecialChars: !0,
        invalidCountryCode: !0,
      },
      phone_contact: {
        required: !0,
        number: !0,
        maxlength: 16,
        minlength: 8,
        noSpecialChars: !0,
      },
      message_contact: { required: !0 },
    },
    messages: {
      fname_contact: { required: "First name is required." },
      lname_contact: { required: "Last name is required." },
      email_contact: {
        required: "Email is required.",
        emailvalidation: "Enter valid email.",
      },
      country_contact: {
        required: "Please enter country code.",
        maxlength: "Enter valid country code.",
        minlength: "Enter valid country code.",
        number: "Enter valid country code.",
      },
      phone_contact: {
        required: "Phone Number is required.",
        maxlength: "Enter valid Phone number.",
        minlength: "Enter valid Phone number.",
        number: "Enter valid Phone number.",
      },
      message_contact: { required: "Message is required." },
    },
    submitHandler: function (e) {
      //   alert("test");
      // form.submit();
      var formData = new FormData($("#contact-form")[0]);
      $.ajax({
        type: "POST",
        url: "mail_for_contactus.php",
        data: formData,
        cache: false,
        async: false,
        contentType: false,
        processData: false,
        beforeSend: function (xhr) {
          $(".modalLoader").show();
        },
        success: function (json) {
          $("#contact-form")[0].reset();
          $("#country_contact").val(""); // Reset the country_code field
          $(".successmsg").removeClass("hide");
          setTimeout(function () {
            $(".successmsg").addClass("hide");
          }, 1000);
          window.location = "https://CodeLoom Nexus.com/thank-you.php";
        },
        complete: function (data) {
          $(".modalLoader").hide();
        },
        error: function () {
          $(".errormsg").removeClass("hide");
          alert("error");
        },
      });
    },
  });

  $("#contactpopupFrom").validate({
    ignore: ":hidden:not(#country_popup)",
    rules: {
      name_popup: { required: !0, maxlength: 50 },
      email_popup: { required: !0, emailvalidation: !0 },
      country_popup: {
        required: !0,
        number: !0,
        maxlength: 4,
        minlength: 1,
        noSpecialChars: !0,
        invalidCountryCode: !0,
      },
      phone_popup: {
        required: !0,
        number: !0,
        maxlength: 16,
        minlength: 8,
        noSpecialChars: !0,
      },
      message_popup: { required: !0 },
    },
    messages: {
      name_popup: { required: "First name is required." },
      email_popup: {
        required: "Email is required.",
        emailvalidation: "Enter valid email.",
      },
      country_popup: {
        required: "Please enter country code.",
        maxlength: "Enter valid country code.",
        minlength: "Enter valid country code.",
        number: "Enter valid country code.",
      },
      phone_popup: {
        required: "Phone Number is required.",
        maxlength: "Enter valid Phone number.",
        minlength: "Enter valid Phone number.",
        number: "Enter valid Phone number.",
      },
      message_popup: { required: "Message is required." },
    },
    submitHandler: function (e) {
      //   alert("test");
      // form.submit();
      var formData = new FormData($("#contactpopupFrom")[0]);
      $.ajax({
        type: "POST",
        url: "mail_for_popupform.php",
        data: formData,
        cache: false,
        async: false,
        contentType: false,
        processData: false,
        beforeSend: function (xhr) {
          $(".modalLoader").show();
        },
        success: function (json) {
          $("#contactpopupFrom")[0].reset();
          $("#country_popup").val(""); // Reset the country_code field
          $(".successmsg").removeClass("hide");
          setTimeout(function () {
            $(".successmsg").addClass("hide");
          }, 1000);
          $(".modals").removeClass("active-model");

          window.location = "https://CodeLoom Nexus.com/thank-you.php";
        },
        complete: function (data) {
          $(".modalLoader").hide();
        },
        error: function () {
          $(".errormsg").removeClass("hide");
          alert("error");
        },
      });
    },
  });

  $(".contact-model-close").click(function () {
    $("#contactpopupFrom")[0].reset();
    $("#name_popup-error").css("display", "none");
    $("#email_popup-error").css("display", "none");
    $("#phone_popup-error").css("display", "none");
    $("#country_popup-error").css("display", "none");
    $("#message_popup-error").css("display", "none");
  });
  var $popup = $(".modal");
  var $form = $("#contactpopupFrom");
  $(document).mousedown(function (e) {
    //$("#contactpopupFrom").validate().resetForm();
    if (
      !$form.is(e.target) &&
      $form.has(e.target).length === 0 &&
      !$popup.is(e.target) &&
      $popup.has(e.target).length === 0
    ) {
      $form[0].reset();
      $("#name_popup-error").css("display", "none");
      $("#email_popup-error").css("display", "none");
      $("#phone_popup-error").css("display", "none");
      $("#country_popup-error").css("display", "none");
      $("#message_popup-error").css("display", "none");
    }
  });
  $("#country_contact").on("change", function (e, t) {
    $(this).valid();
  }),
    $("#country_popup").on("change", function (e, t) {
      $(this).valid();
    }),
    $("#country_code").on("change", function (e, t) {
      $(this).valid();
    }),
    $("#form").on("hidden.bs.modal", function (e) {
      alert("hidden");
      //$("#contactpopupFrom").validate().resetForm();
      $(this).find("form")[0].reset(),
        $(this).validate().resetForm(),
        $("#country_popup").val(""),
        $("#contactpopupFrom .country_popup")
          .find(".text")
          .png(
            '<i class="default_flag flag"><img src="./images/flags/select country.svg"></i><span class="text_name">Select Country  </span><span class="country_code"></span>',
          ),
        $(".ui.fluid.country_popup").dropdown("set selected", "");
    });
});
$(document).on("click", ".model-close-icon", function () {
  $("#contactpopupFrom").validate().resetForm();
});
$(".modal-overlap").click(function (e) {
  $("#contactpopupFrom").validate().resetForm();
});
// $(document).on("click", ".modal-overlan", function () {
//   alert("hidden");
//   $("#contactpopupFrom").validate().resetForm();
//   $(this).find("form")[0].reset(),
//     $(this).validate().resetForm(),
//     $("#country_popup").val(""),
//     $("#contactpopupFrom .country_popup")
//       .find(".text")
//       .png(
//         '<i class="default_flag flag"><img src="./images/flags/select country.svg"></i><span class="text_name">Select Country  </span><span class="country_code"></span>'
//       ),
//     $(".ui.fluid.country_popup").dropdown("set selected", "");
// });
