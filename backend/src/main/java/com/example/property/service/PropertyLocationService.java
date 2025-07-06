package com.example.property.service;

import com.example.property.model.PropertyLocation;
import com.example.property.repository.PropertyLocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PropertyLocationService {

    @Autowired
    private PropertyLocationRepository repository;

    public List<PropertyLocation> getAllProperties() {
        return repository.findAll();
    }

    public List<PropertyLocation> getByCity(String city) {
        return repository.findByCityContainingIgnoreCase(city);
    }

    public List<PropertyLocation> getByPincode(String pincode) {
        return repository.findByPincode(pincode);
    }
}
