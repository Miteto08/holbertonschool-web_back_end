-- SQL script that creates a trigger that resets the attribute valid_email only
-- when the email has been changed
CREATE TRIGGER order_decrease BEFORE INSERT ON orders
FOR EACH ROW UPDATE items
SET quantity = quantity - NEW.number
WHERE name = NEW.item_name