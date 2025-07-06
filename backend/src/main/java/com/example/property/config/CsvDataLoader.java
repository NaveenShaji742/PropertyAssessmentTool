package com.example.property.config;

import com.example.property.model.PropertyLocation;
import com.example.property.repository.PropertyLocationRepository;
import com.opencsv.CSVReader;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.InputStreamReader;
import java.io.Reader;
import java.util.List;

@Component
public class CsvDataLoader {

    @Autowired
    private PropertyLocationRepository repository;

    @PostConstruct
    public void loadData() {
        try {
            Reader reader = new InputStreamReader(
                    getClass().getResourceAsStream("/kerala_pincodes_with_map_locations.csv")
            );
            CSVReader csvReader = new CSVReader(reader);

            List<String[]> rows = csvReader.readAll();
            boolean isHeader = true;

            for (String[] row : rows) {
                if (isHeader) {
                    isHeader = false;
                    continue;
                }

                try {
                    String[] latLng = row[4].split(",");
                    PropertyLocation property = new PropertyLocation();
                    property.setPincode(row[1]);
                    property.setCity(row[2]);
                    property.setArea(row[3]);
                    property.setLatitude(Double.parseDouble(latLng[0].trim()));
                    property.setLongitude(Double.parseDouble(latLng[1].trim()));
                    property.setAadhaarId(row[6]);
                    property.setHouseName(row[7]);

                    repository.save(property);
                } catch (Exception ex) {
                    System.out.println("Skipping row due to error: " + ex.getMessage());
                }
            }

            csvReader.close();
            System.out.println("CSV data loaded successfully.");
        } catch (Exception e) {
            System.out.println("Failed to load CSV: " + e.getMessage());
        }
    }
}
