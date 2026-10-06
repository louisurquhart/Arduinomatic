package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "sensor_readings") // Swapped hyphen for underscore (standard for SQL tables)
public class SensorReading {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Added auto-generation
    private Long id;

    // Many Sensor Readings belong to One Device
    @ManyToOne
    @JoinColumn(name = "device_id", nullable = false)
    private Device device;

    // TODO: Add variables for the actual sensor data (e.g., temperature, humidity)
    // private Double temperature;
}
