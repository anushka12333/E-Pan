package com.epanrestapi.epanendpoints.repository;

import com.epanrestapi.epanendpoints.model.FileDb;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FileDbRepository extends JpaRepository<FileDb ,String> {
    
}
