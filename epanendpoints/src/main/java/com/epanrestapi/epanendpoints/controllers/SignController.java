package com.epanrestapi.epanendpoints.controllers;

import java.util.List;

import com.epanrestapi.epanendpoints.model.User;
import com.epanrestapi.epanendpoints.repository.UserRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class SignController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public List<User> getUsers() {
        return userRepository.findAll();
    }
    @PostMapping("/users")
    public User saveUser(@RequestBody User user){
        return userRepository.save(user);
    }
    @GetMapping("/users/{id}")
    public User getSingleUser(@PathVariable Long id){
       return  userRepository.findById(id).get();
       
    }
    @PutMapping("/users")
    public User updateUserDetails(@RequestBody User user){
        return userRepository.save(user);
    }


    @DeleteMapping("/users/{id}")
    public ResponseEntity<HttpStatus> deleteUserById(@PathVariable Long id){
        userRepository.deleteById(id);
        return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
    }


}
