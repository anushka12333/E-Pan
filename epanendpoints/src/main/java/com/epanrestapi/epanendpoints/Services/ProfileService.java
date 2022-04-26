package com.epanrestapi.epanendpoints.Services;

import java.util.List;

// import java.util.List;

import com.epanrestapi.epanendpoints.model.Profile;
import com.epanrestapi.epanendpoints.repository.ProfileRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ProfileService {
    @Autowired
    ProfileRepository profileRepository;

    //get all Profiles
    public List<Profile> getAllProfiles(){
      List<Profile> list= (List<Profile>)this.profileRepository.findAll();
       return list;
   }
   //get single Profile by id
   public Profile getProfileById(Long id){
       Profile profile=null;
       try{
         
           profile=this.profileRepository.findById(id).get();
       }
       catch(Exception e){
           e.printStackTrace();
       }
       return profile;
   }
   //adding the Profile
   public Profile addProfile(Profile b){
      // list.add(b);
      Profile result=this.profileRepository.save(b);
       return result;
   }
   //delete Profile
   public void deleteProfile(Long bid){
 
     profileRepository.deleteById(bid);
   }
   //update the Profile
   public void updatProfile(Profile profile, Long profileId){
 
   profile.setId(profileId);
   profileRepository.save(profile);

   }

}
