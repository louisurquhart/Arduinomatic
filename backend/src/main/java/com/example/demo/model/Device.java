package com.example.demo.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "devices")
public class Device {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String mac_address;

    @Column(nullable = false, unique = true)
    private String device_name;

    @Column(nullable = true, unique = false)
    private LocalDateTime last_connected;

    // Many devices belong to one user
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    // One device has many sensor readings
    @OneToMany(mappedBy = "device")
    private List<SensorReading> sensorReadings;
}
