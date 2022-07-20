function submitForm() {
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let phone = document.getElementById("input-phone").value;
  let subject = document.getElementById("input-subject").value;
  let message = document.getElementById("input-message").value;

  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(subject);
  console.log(message);

  if (name == "") {
    alert("Opps nama tidak boleh kosong");
  } else if (email == "") {
    alert("Opps email juga tidak boleh kosong");
  } else if (phone == "") {
    alert("Opps phone juga tidak boleh kosong");
  } else if (subject == "") {
    alert("Opps subject juga tidak boleh kosong");
  } else if (message == "") {
    alert("Opps message juga tidak boleh kosong");
  }
  const emailReciver = "?";
  const a = document.createElement("a");

  a.href = `mailto: ${emailReciver}?subject= ${subject}&body= Hello my name ${name}, ${subject}, ${message}, may phone number ${phone}`;
  a.target = "_blank";
  a.click();
}
