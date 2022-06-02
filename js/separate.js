function createTable(mainObj) {
    let myTable = document.createElement("table");

    myTable.style.border = "2px solid blue";
    myTable.style.borderCollapse = "collapse";

    let rows = "";
    let headers = "<thead><tr>";
    for (let key in mainObj[0]) {
      headers += "<th>" + key + "</th>";
    }
    headers += "</tr></thead>";

    console.log("Upto thead here: ", headers);

    headers += "<tbody id='tbodyContent'>";

    //start row now
    for (let i = 0; i < mainObj.length; i++) {
      rows += "<tr>";
      // for (let element of mainObj) {
      let element = mainObj[i];
      for (let key in element) {
        //   console.log("Check data:", mainObj[0]);
        // console.log("Check data:", element[key]);
        rows += "<td>" + element[key] + "</td>";
      }
      rows += "</tr>";
    }

    headers += rows + "</tbody>";
    console.log("Final data here:", headers);

    myTable.innerHTML = headers;
    return myTable;
  }

  function createTableContentOnly(mainObj) {
    let rows = "";
    let headers = "<thead><tr>";
    for (let key in mainObj[0]) {
      headers += "<th>" + key + "</th>";
    }
    headers += "</tr></thead>";

    console.log("Upto thead here: ", headers);

    headers += "<tbody>";

    //start row now
    for (let i = 0; i < mainObj.length; i++) {
      rows += "<tr>";
      // for (let element of mainObj) {
      let element = mainObj[i];
      for (let key in element) {
        //   console.log("Check data:", mainObj[0]);
        // console.log("Check data:", element[key]);
        rows += "<td>" + element[key] + "</td>";
      }
      rows += "</tr>";
    }

    headers += rows + "</tbody>";
    console.log("Final data here:", headers);
    return headers;
  }

  function createList(mainObj, listType) {
    let myTable = document.createElement(listType);
    console.log("MYTABLE", myTable);
    let content = "";
    //start row now
    for (let i = 0; i < mainObj.length; i++) {
      // content += "";
      let element = mainObj[i];
      for (let key in element) {
        // console.log(element[key]);
        content += "<li>" + element[key] + "</li>";
      }
    }

    console.log(content);

    myTable.innerHTML = content;

    return myTable;
  }
