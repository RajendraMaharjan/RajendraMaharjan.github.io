$(function () {
    let fName = $("#fName");
    let lName = $("#lName");
    let address = $("#address");
    let phone = $("#phone");
    let email = $("#email");

    let select = $("#country");
    // let submitI = $("#submit");
    let clearID = $("#clearID");


    // let reloadPgId = $("#reloadPgId");

    // clearID.click(function () {});

    // submitI.click(function () {
    $("#mainForm").submit(function () {

        let gender = $("input[name='radiogender']:checked").val();
        let genderTAG = $("#genderBlock");

        let checkBox = $("input[name='checkBx']:checked");
        let interestBlock = $("#interestBlock");

        console.log(fName.val());
        console.log(lName.val());
        console.log(address.val());
        console.log(phone.val());
        console.log(email.val());
        console.log("gen", gender);
        console.log("select", select.val());
        // console.log("checkbox", checkBox[0].value);

        let interest = "";
        for (let i = 0; i < checkBox.length; i++) {
            interest = interest + " " + checkBox[i].value;
        }
        //   console.log("TEST CHECK", interest);

        replaceComp(fName, fName.val());
        replaceComp(lName, lName.val());
        replaceComp(address, address.val());
        replaceComp(phone, phone.val());
        replaceComp(email, email.val());

        replaceComp(genderTAG, gender);
        replaceComp(select, select.val());
        replaceComp(interestBlock, interest);
        return false;
    });

    // let submitII = document.getElementById("submit");
    // function tte() {
    //   alert("YO");
    // };
    // // submit.onclick =tte;

    $("#reloadPgId").click(function () {
        console.log("RELAOD")
        window.location.reload();
    });

    function replaceComp(inputBlock, replacingContent) {
        const element = document.createElement("label");
        element.innerHTML = replacingContent;
        inputBlock.replaceWith(element);
    }
});