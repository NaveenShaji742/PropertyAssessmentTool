package com.example.property.controller;

import com.example.property.model.PropertyLocation;
import com.example.property.service.PropertyLocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/properties")
@CrossOrigin(origins = "*")
public class PropertyLocationController {

    @Autowired
    private PropertyLocationService service;

    @GetMapping
    public List<PropertyLocation> getAll() {
        return service.getAllProperties();
    }

    @GetMapping("/city")
    public List<PropertyLocation> getByCity(@RequestParam String name) {
        return service.getByCity(name);
    }

    @GetMapping("/pincode")
    public List<PropertyLocation> getByPincode(@RequestParam String code) {
        return service.getByPincode(code);
    }
}
