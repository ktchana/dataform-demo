// Copyright 2022 Google. This software is provided as-is, without warranty or representation for any use or purpose. Your use of it is subject to your agreement with Google.  

function getVariable() {
  var generated_statement = "";
  gcp_cur_tables.list_of_table.forEach(function (item, index) {
    generated_statement += "select 1 from " + item + " union all ";
  });
  generated_statement = generated_statement.replace(/ union all $/, "")
  return generated_statement;
    //return dataform.projectConfig.vars.myVariableName;
}

module.exports = { getVariable };
