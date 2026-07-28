SELECT 
    ethnicity.name,
    COUNT(*) AS "COUNT(p.ethnicity)"
FROM patient
JOIN ethnicity
    ON patient.ethnicity = ethnicity.id
WHERE patient.disease = 'lettuce disease'
GROUP BY ethnicity.name;