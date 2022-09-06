$().ready(function () {
  $.validator.addMethod(
    "t1",
    function (value, element) {
      return this.optional(element) || /^[A-Z]{4}[0-9]{6}[2]{2}$/i.test(value);
    },
    "Please enter valid file number [AAAA-123456-22]"
  );


 $.validator.addMethod(
    "f1",
    function (value, element) {
      return this.optional(element) || /^[A-Z]{4}[0-9]{6}[2]{2}$/i.test(value);
    },
    "Please enter valid file number [AAAA-123456-22]"
  );



  jQuery("#pass_port").validate({
    rules: {
      t1: "required t1",
      f1: "required f1",
      
      email: {
        required: true,
        email: true,
      },
      t2: "required",
      t3: "required",
      t4: "required",
      t5: "required",
      t6: "required",
      t7: "required",
      t8: "required",
      t9: "required",
      t10: "required",
      t11: "required",
      t12: "required",
      t13: "required",
      t14: "required",
      t15: "required",
      t16: "required",
      t17: "required",
      t18: "required",
      t19: "required",
      t20: "required",
      t21: "required",
      t22: "required",
      t23: "required",
      t24: "required",
      t25: "required",
      t26: "required",
      t27: "required",
      t28: "required",
      n1: "required",

      t29: {
        required: true,
        email: true,
      },

      t30: "required",
      t31: "required",
      t32: "required",
      t33: "required",
      t34: "required",
      t35: "required",
      t36: "required",
      // r1: "required",
      // r2: "required",
      "r1[]": {
        required: true,
      },
      "r2[]": {
        required: true,
      },
      "c1[]": {
        required: true,
      },
      "r3[]": {
        required: true,
      },
      "r4[]": {
        required: true,
      },
      "r5[]": {
        required: true,
      },
      "r6[]": {
        required: true,
      },
      "r7[]": {
        required: true,
      },
      "r8[]": {
        required: true,
      },
      "r9[]": {
        required: true,
      },
      "r10[]": {
        required: true,
      },
      "r11[]": {
        required: true,
      },
      "r12[]": {
        required: true,
      },
      "r13[]": {
        required: true,
      },
      "r14[]": {
        required: true,
      },
      "r15": {
        required: true,
      },
      "r16": {
        required: true,
      },
      "r17": {
        required: true,
      },
      "r18": {
        required: true,
      },
      "r19": {
        required: true,
      },
      "r20": {
        required: true,
      },
      "r21": {
        required: true,
      },
      "r22": {
        required: true,
      },
      "r23": {
        required: true,
      },
      "r24": {
        required: true,
      },
      "r25": {
        required: true,
      },
      "r26": {
        required: true,
      },
      "r27": {
        required: true,
      },
      "r28": {
        required: true,
      },
      "r29": {
        required: true,
      },
      "r30": {
        required: true,
      },
      "c2[]": {
        required: true,
      },

      "date1[]": {
        required: true,
      },

      date2: {
        required: true,
      },
      date3: {
        required: true,
      },
      date4: {
        required: true,
      },
      date5: {
        required: true,
      },
      date6: {
        required: true,
      },
      m1: {
        required: true,
      },
      file: "required",
      sign: "required",
    },

    messages: {
      t1: {
        required: "Please enter a file number",
        pattern: "enter a valid file number",
      },

      email: {
        required: "Please enter email",
        email: "Please enter valid email",
      },
      t3: {
        required: "Please enter Applicant's Given Name",
      },
      t2: {
        required: "Please enter Applicant's Given Name",
      },
      t4: {
        required: "Please enter Place of Birth",
      },
      // t7: {
      //   required: "Please specify organization name",
      // },
      "r1[]": {
        required: "Please select radio button",
      },

      "r2[]": {
        required: "Please select radio button",
      },

      "c1[]": {
        required: "Please select checkbox button",
      },

      file: {
        required: "Please upload your photograph",
      },
      sign: {
        required: "Please upload your signature",
      },
    },

    // errorPlacement: function (error, element) {
    //   if (element.is(":radio")) {
    //     error.appendTo(element.parents(".fresh"));
    //   }
    //   else if(element.is(":checkbox")){
    //     error.appendTo(element.parents(".check"))
    //   }
    //    else {
    //     error.insertAfter(element);
    //   }
    // },

    submitHandler: function (form) {
      form.submit();
    },
  });
});

function final() {

  if (document.getElementById("perm_yes").checked) {
    document.getElementById("t26").disabled = true;
    document.getElementById("t27").disabled = true;
    document.getElementById("t28").disabled = true;
    document.getElementById("t29").disabled = true;
  } else {
    document.getElementById("t26").disabled = false;
    document.getElementById("t27").disabled = false;
    document.getElementById("t28").disabled = false;
    document.getElementById("t29").disabled = false;
  }

  if (document.getElementById("ci").checked) {
    document.getElementById("t2").disabled = false;
  } else {
    document.getElementById("t2").disabled = true;
  }

  if (document.getElementById("aa").checked) {
    document.getElementById("ac").disabled = true;
    document.getElementById("ad").disabled = true;
    document.getElementById("ae").disabled = true;
    document.getElementById("af").disabled = true;
    document.getElementById("ag").disabled = true;
    document.getElementById("ah").disabled = true;

    document.getElementById("ca").disabled = true;
    document.getElementById("cb").disabled = true;
    document.getElementById("cc").disabled = true;
    document.getElementById("cd").disabled = true;
    document.getElementById("ce").disabled = true;
    document.getElementById("cf").disabled = true;
    document.getElementById("cg").disabled = true;
    document.getElementById("ch").disabled = true;
    document.getElementById("ci").disabled = true;

    document.getElementById("t2").disabled = true;

    document.getElementById("t30").disabled = true;
    document.getElementById("t31").disabled = true;
    document.getElementById("date2").disabled = true;
    document.getElementById("date3").disabled = true;
  } else {
    document.getElementById("ac").disabled = false;
    document.getElementById("ad").disabled = false;
    document.getElementById("ae").disabled = false;
    document.getElementById("af").disabled = false;
    document.getElementById("ag").disabled = false;
    document.getElementById("ah").disabled = false;

    document.getElementById("ca").disabled = true;
    document.getElementById("cb").disabled = true;
    document.getElementById("cc").disabled = true;
    document.getElementById("cd").disabled = true;
    document.getElementById("ce").disabled = true;
    document.getElementById("cf").disabled = true;
    document.getElementById("cg").disabled = true;
    document.getElementById("ch").disabled = true;
    document.getElementById("ci").disabled = true;

    document.getElementById("t30").disabled = false;
    document.getElementById("t31").disabled = false;
    document.getElementById("date2").disabled = false;
    document.getElementById("date3").disabled = false;
  }

  if (document.getElementById("ag").checked) {
    document.getElementById("ca").disabled = false;
    document.getElementById("cb").disabled = false;
    document.getElementById("cc").disabled = false;
    document.getElementById("cd").disabled = false;
    document.getElementById("ce").disabled = false;
    document.getElementById("cf").disabled = false;
    document.getElementById("cg").disabled = false;
    document.getElementById("ch").disabled = false;
    document.getElementById("ci").disabled = false;

    return true;
  } else {
    document.getElementById("ca").disabled = true;
    document.getElementById("cb").disabled = true;
    document.getElementById("cc").disabled = true;
    document.getElementById("cd").disabled = true;
    document.getElementById("ce").disabled = true;
    document.getElementById("cf").disabled = true;
    document.getElementById("cg").disabled = true;
    document.getElementById("ch").disabled = true;
    document.getElementById("ci").disabled = true;

    document.getElementById("t2").disabled = true;
  }

    if (document.getElementById("r15").checked) {
    document.getElementById("f1").disabled = false;
    document.getElementById("m1").disabled = false;
    document.getElementById("n1").disabled = false;
  } else {
    document.getElementById("f1").disabled = true;
    document.getElementById("m1").disabled = true;
    document.getElementById("n1").disabled = true;
  }






}
