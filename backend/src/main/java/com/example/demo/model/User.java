package com.example.demo.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Added auto-generation
    private Long id;

    // One User can have Many Devices
    // "mappedBy" tells Spring to look at the 'user' variable in the Device class
    @OneToMany(mappedBy = "user")
    private List<Device> devices;
    
}
