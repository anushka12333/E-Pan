package com.epanrestapi.epanendpoints.Services;


import java.io.IOException;
import java.util.List;
// import java.util.Optional;
// import java.util.UUID;
// import java.util.*;
import java.util.Optional;

import com.epanrestapi.epanendpoints.Exception.FileStorageException;

import com.epanrestapi.epanendpoints.Exception.FileNotFoundException;
import com.epanrestapi.epanendpoints.model.FileDb;
import com.epanrestapi.epanendpoints.repository.FileDbRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
@Service
public class FileDbService {
   @Autowired
   FileDbRepository fileDbRepository;

    public FileDb store(MultipartFile file) {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        try{
            if(fileName.contains("..")){
                throw new FileStorageException("Sorry! Filename invalid path sequence" +fileName);
            }
           
        
        FileDb dbFile = new FileDb(fileName,file.getContentType(),file.getBytes());
        return fileDbRepository.save(dbFile);
        }
        catch(IOException ex){
            throw new FileStorageException("Could not store file "+fileName);
        }

    }
    public FileDb getFile(String id){
        return fileDbRepository.findById(id)
               .orElseThrow( () -> new FileNotFoundException("File Not Foiund with id"+id));
    }
    
    public FileDb getFileById(String id){
        Optional<FileDb> fileOptional= fileDbRepository.findById(id);
        if(fileOptional.isPresent()){
            return fileOptional.get();
        }
        return null;
    }

    public List<FileDb> getFileList(){
        return fileDbRepository.findAll();
    }
}
