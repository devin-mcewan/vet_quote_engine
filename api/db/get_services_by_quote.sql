SELECT
    s.*
FROM
    quotes q
    JOIN quotes_services qs ON q.id = qs.quote_id
    JOIN services s on s.id = qs.service_id
WHERE
    q.id = ${id};