-- Insert an organization
INSERT INTO organizations (name) VALUES
('Example Organization');

-- Insert a user
INSERT INTO users (name, email, password)
VALUES ('Brad Simantel', 'brad@example.com', 'encrypted');

-- Insert a membership
INSERT INTO memberships (organization_id, user_id, role)
VALUES (1, 1, 'admin');

-- Insert a board
INSERT INTO boards (organization_id, name) VALUES
(1, 'Example Board');

-- Insert columns
INSERT INTO columns (organization_id, board_id, name, position) VALUES 
(1, 1, 'To Do', 1),
(1, 1, 'In Progress', 2),
(1, 1, 'Done', 3);

-- Insert tasks
INSERT INTO tasks (organization_id, board_id, column_id, name, description, position) VALUES
(1, 1, 1, 'Task 1', 'This is the first task', 1),
(1, 1, 1, 'Task 2', 'This is the second task', 2),
(1, 1, 2, 'Task 3', 'This is the third task', 1),
(1, 1, 3, 'Task 4', 'This is the fourth task', 1);