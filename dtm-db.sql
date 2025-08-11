CREATE TABLE equipment (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    type VARCHAR(50) NOT NULL,
    status ENUM('available', 'rented', 'maintenance', 'spoiled') DEFAULT 'available'
);

INSERT INTO equipment (name, type, status) VALUES
('CAT 320D', 'excavator', 'available'),
('Tractor', 'Haulage', 'available'),
('Komatsu D65', 'bulldozer', 'available');

