-- FIND EARLIEST DATE OF EARLIEST USER
-- SELECT
--     email,
--     DATE_FORMAT(MIN(created_at), '%M %D %Y') AS earliest_date 
-- FROM users
-- GROUP BY email
-- ORDER BY created_at
-- LIMIT 1;

-- -- FIND EARLIEST DATE OF EARLIEST USER (using SUBQUERY)
-- SELECT * 
-- FROM users 
-- WHERE created_at = (SELECT Min(created_at) FROM users); 

-- USERS ACCORDING TO MONTH JOINED
-- SELECT 
--     MONTHNAME(created_at) AS MONTH, 
--     COUNT(*) AS COUNT 
-- FROM users
-- GROUP BY MONTHNAME(created_at);

-- USERS DEPENDING ON YAHOO EMAIL
-- SELECT COUNT(*) AS yahoo_users
-- FROM users
-- WHERE email LIKE '%yahoo%';

-- SELECT 
--     CASE 
--         WHEN email LIKE '%@gmail%' THEN 'gmail'
--         WHEN email LIKE '%@yahoo%' THEN 'yahoo'
--         WHEN email LIKE '%@hotmail%' THEN 'hotmail'
--         ELSE 'other'
--     END AS provider,
--     COUNT(*)
-- FROM users
-- GROUP BY provider;