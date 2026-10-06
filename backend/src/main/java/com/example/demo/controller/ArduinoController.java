package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class ArduinoController {
    @GetMapping("/api/test")
    public String test() {
        return "Test success";
    }
}
