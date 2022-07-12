var list_of_table = ["ddudududududu"];

if (dataform.projectConfig.vars.org == "skyuk") {
  list_of_table = ["ocv_static_tables.gcp_bill_data"];
}
module.exports = { list_of_table };

/*
var list_of_table = ["report_table"];
if (dataform.projectConfig.vars.myVariableName == "skyuk") {
  list_of_table = ["billing_data_tab_df"];
} else if (dataform.projectConfig.vars.myVariableName == "skygermany") {
  list_of_table = ["billing_data_tab_df"];
}

module.exports = { list_of_table };
*/