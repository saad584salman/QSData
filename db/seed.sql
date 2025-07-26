INSERT INTO progress (description, completed) VALUES
('Initial setup', true),
('Implement API', false);

INSERT INTO users (username, password_hash, role) VALUES
('Saad', '$2b$10$HBEP2mujXFgGlvRhEd2Mie9Gh90t3OqYgYsZa1v8my7rlm4Z8xn.e', 'master'),
('originator1', '$2b$10$J5HEZLpU9d/kKYetwyO2t.Ce1G2AzixpHOJnxIzHDGshKbiAuv0sO', 'originator'),
('originator2', '$2b$10$J5HEZLpU9d/kKYetwyO2t.Ce1G2AzixpHOJnxIzHDGshKbiAuv0sO', 'originator'),
('senior1', '$2b$10$J5HEZLpU9d/kKYetwyO2t.Ce1G2AzixpHOJnxIzHDGshKbiAuv0sO', 'senior');

INSERT INTO sap_projects (sr_no, s_no, name_of_scheme) VALUES
  (1, 101, 'Sample Scheme');

INSERT INTO zone_summary (zone, no_of_projects, approved_cost, no_handed_over, no_remaining) VALUES
  ('North', 1, 1000000.00, 0, 1);

INSERT INTO psdp_projects (classification, psdp_no, project_name, no_of_projects, approved_cost, allocation_2024_25) VALUES
  ('A', 1, 'PSDP Project', 1, 500000.00, 100000.00);
