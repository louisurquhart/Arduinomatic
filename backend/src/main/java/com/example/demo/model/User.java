package com.example.demo.model;

import jakarta.persistence.*;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;
import java.util.List;
import java.util.Map;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Added auto-generation
    private Long id;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String password_hash;

    @Column(nullable = false)
    private String email;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(columnDefinition = "jsonb")
    private Map<String, Object> userPreferences;

    // One User can have Many Devices
    // "mappedBy" looks at the 'user' variable in the Device class
    @OneToMany(mappedBy = "user")
    private List<Device> devices;
    
}
