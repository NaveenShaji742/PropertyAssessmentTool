package com.example.property.repository;

import com.example.property.model.PropertyLocation;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PropertyLocationRepository extends JpaRepository<PropertyLocation, Long> {
    List<PropertyLocation> findByCityContainingIgnoreCase(String city);
    List<PropertyLocation> findByPincode(String pincode);
}
