function gcp_table_list() {
  var generated_statement = "";
  gcp_cur_tables.list_of_table.forEach(function (item, index) {
      generated_statement += " SELECT project.id project_id,bex.service.description product_name,sku.description descr,invoice.month invoice_month,timestamp_trunc(usage_start_time,HOUR) as usage_start_time,location.country country,location.region region,CAST(null AS string) AS resource_id,(SELECT value FROM UNNEST(labels) c where c.key = 'inv_resident_id') as resident_id,(SELECT value FROM UNNEST(labels) c where c.key = 'inv_proposition_id') as proposition_id,(SELECT value FROM UNNEST(labels) c where c.key = 'inv_cost_centre') as inv_cost_centre,(SELECT value FROM UNNEST(labels) c where c.key = 'inv_environment_id') as environment_id,(SELECT value FROM UNNEST(labels) c where c.key = 'inv_service_id') as service_id,(SELECT key FROM UNNEST(labels) c where c.key = 'goog-gke-node') AS cluster_subtype,(SELECT value FROM UNNEST(labels) c where c.key = 'inv_cluster_id') AS cluster_id,(SELECT value FROM UNNEST(labels) c where c.key = 'inv_cluster_type') AS cluster_type,SUM(usage.amount) AS usage,(((SUM(CAST(cost / currency_conversion_rate * 1000000 AS int64)) + SUM(IFNULL((SELECT SUM(CAST(c.amount / currency_conversion_rate * 1000000 as int64))                 FROM UNNEST(credits) c WHERE (c.type != 'PROMOTION' OR c.type IS NULL) AND c.name NOT IN ('migration-credit-3-1572442693763','migration-credit-2-1572442693763')), 0))) / 1000000 ) ) as cost,((SUM(CAST(cost / currency_conversion_rate * 1000000 AS int64)) / 1000000 ) ) AS unblended_cost,((SUM(CAST(cost / currency_conversion_rate * 1000000 AS int64)) / 1000000 ) ) AS net_unblended_cost FROM " + item + " bex WHERE cost IS NOT NULL GROUP BY 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16" + " union all";
});

generated_statement = generated_statement.replace(/ union all$/, " ")

return generated_statement;
}

module.exports = { gcp_table_list };
