package com.example.demo.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "sensor_readings")
public class SensorReading {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Many Sensor Readings belong to One Device
    @ManyToOne
    @JoinColumn(name = "device_id", nullable = false)
    private Device device;

    // Time of reading
    @Column(nullable = false)
    private LocalDateTime timestamp;

    // Sensor type
    @Column(nullable = false)
    private String sensorType;

    // Actual value of sensor
    @Column(nullable = false)
    private Double value;

    // Unit (maybe)
    private String unit;

}
