-- Insert an organization
INSERT INTO organizations (name) VALUES
('Example Organization');

-- Insert a user with the password "password"
INSERT INTO users (name, email, password)
VALUES ('Brad Simantel', 'brad@cardboard.com', '$2a$08$jk6pQVDVvDJM5FCL4rMCwOQIGbKstfJ8waOY6MdDDooQJaLW/tkAC');

-- Insert a membership
INSERT INTO memberships (organization_id, user_id, role)
VALUES (1, 1, 'admin');

-- Insert boards
INSERT INTO boards (organization_id, name, icon) VALUES
(1, 'Active Development', 'pyramid'),
(1, 'Green Initiatives', 'leaf'),
(1, 'Design', 'spa');

-- Insert columns
INSERT INTO columns (organization_id, board_id, name, position) VALUES 
(1, 1, 'To Do', 1),
(1, 1, 'In Progress', 2),
(1, 1, 'Done', 3);

-- Insert categories
INSERT INTO categories (organization_id, name) VALUES
(1, 'UX Improvements'),
(1, 'Cards'),
(1, 'Onboarding'),
(1, 'Documents'),
(1, 'Color'),
(1, 'Tags');

-- Insert cards for the first board
INSERT INTO cards (organization_id, board_id, column_id, name, description, position, assignee_id) VALUES
(1, 1, 1, 'Card 1', 'This is the first card', 0, 1),
(1, 1, 1, 'Card 2', 'This is the second card', 1, 1),
(1, 1, 2, 'Card 3', 'This is the third card', 0, null),
(1, 1, 3, 'Card 4', 'This is the fourth card', 0, null);

-- -- Insert card categories
INSERT INTO card_categories (organization_id, card_id, category_id) VALUES
(1, 1, 1),
(1, 2, 2),
(1, 3, 3),
(1, 4, 4);