export function up(knex) {
  return knex.raw(`
    CREATE MATERIALIZED VIEW project_export AS
    SELECT 
      p.id AS project_id,
      p.name AS project_name,
      MAX(CASE WHEN pd.property_key='Category' THEN ep.string_value END)      AS category,
      MAX(CASE WHEN pd.property_key='Year Label' THEN ep.string_value END)    AS year_label,
      MAX(CASE WHEN pd.property_key='District' THEN ep.string_value END)      AS district,
      MAX(CASE WHEN pd.property_key='Expenditure' THEN ep.number_value END)   AS expenditure
    FROM projects p
    LEFT JOIN entity_properties ep
      ON ep.entity_type='project' AND ep.entity_id=p.id
    LEFT JOIN property_definitions pd
      ON pd.id=ep.property_definition_id
    GROUP BY p.id, p.name;
  `);
}

export function down(knex) {
  return knex.raw('DROP MATERIALIZED VIEW IF EXISTS project_export');
} 