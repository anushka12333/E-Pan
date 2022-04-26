package com.epanrestapi.epanendpoints.controllers;

import java.util.List;
import java.util.Optional;

import com.epanrestapi.epanendpoints.Services.ProfileService;
import com.epanrestapi.epanendpoints.model.Profile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProfileController {
    @Autowired
    private ProfileService profileService;
 @GetMapping("/profiles")
    public ResponseEntity<List<Profile>> getProfiles(){    
        List<Profile> list = profileService.getAllProfiles();  
        if(list.size()<=0){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } 
        return ResponseEntity.status(HttpStatus.CREATED).body(list);
    }
    //fetch Profile handler
    @GetMapping("/profiles/{id}")
    public ResponseEntity<Profile> getProfile(@PathVariable("id") Long id){   
        Profile Profile = profileService.getProfileById(id);
        if(Profile==null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }    
        return ResponseEntity.of(Optional.of(Profile));
    }
    //create Profile handler
    @PostMapping("/profiles")
    public ResponseEntity<Profile> addProfile(@RequestBody Profile Profile){
        Profile b = null;
        try{
            b= this.profileService.addProfile(Profile);
            System.out.println(Profile);
            return ResponseEntity.of(Optional.of(b));
        }
        catch(Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        
    }
    @DeleteMapping("/Profiles/{ProfileId}")
    public ResponseEntity<Void> deleteProfile(@PathVariable("ProfileId") Long ProfileId){
        try{
            this.profileService.deleteProfile(ProfileId);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }catch(Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
       
    }
    @PutMapping("/profiles/{profileId}")
    public ResponseEntity<Profile> updatProfile(@RequestBody Profile profile, @PathVariable("profileId") Long profileId){
        try{
            this.profileService.updatProfile(profile,profileId);
            return ResponseEntity.ok().body(profile);
        }catch(Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();

        }
        
        

    }
}
