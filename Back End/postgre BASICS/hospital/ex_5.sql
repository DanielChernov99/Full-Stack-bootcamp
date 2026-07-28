SELECT 
    symptoms_family AS symptoms_family,
    COUNT(*) AS family_count
FROM patient
WHERE disease = 'cabbage disease'

GROUP BY symptoms_family
ORDER BY symptoms_family ASC