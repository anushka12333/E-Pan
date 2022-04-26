package com.epanrestapi.epanendpoints.controllers;

// import java.io.IOException;
import java.util.*;
import java.util.List;
import java.util.stream.Collectors;

import com.epanrestapi.epanendpoints.Payload.Response;
import com.epanrestapi.epanendpoints.Services.FileDbService;
import com.epanrestapi.epanendpoints.model.FileDb;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
public class FileDbController {
    @Autowired
    private FileDbService fileDbService;
   @PostMapping("/uploadFile")
    public Response uploadFile(@RequestParam("file") MultipartFile file) { 
        FileDb fileName = fileDbService.store(file);

        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
        .path("/downloadFile/")
        .path(fileName.getName())
        .toUriString();

        return new Response(fileName.getName(),fileDownloadUri,file.getContentType(),file.getSize());

    }

    @PostMapping("/uploadMultipleFiles")
    public List<Response> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files) {
        return Arrays.asList(files)
               .stream()
               .map(file ->uploadFile(file)) 
              .collect(Collectors.toList());
    }

    
    @GetMapping("file/{id}")
    public FileDb getFile(@PathVariable String id){
        return fileDbService.getFileById(id);
    }
    @GetMapping("file/list")
    public List<Response> getFileList(){
        fileDbService.getFileList();
        return null;
    }
}
